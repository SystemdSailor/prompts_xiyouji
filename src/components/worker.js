
import { pipeline } from '@xenova/transformers';
import { env } from '@xenova/transformers';
env.localModelPath  = './';

/**
 * This class uses the Singleton pattern to ensure that only one instance of the
 * pipeline is loaded. This is because loading the pipeline is an expensive
 * operation and we don't want to do it every time we want to translate a sentence.
 */
class MyTranslationPipeline {
    static task = 'feature-extraction';
    static model = 'Xenova/conv-bert-small';


    static instance = null;

    static async getInstance(progress_callback = null) {
        if (this.instance === null) {
            this.instance = pipeline(this.task, this.model, { progress_callback });
        }

        return this.instance;
    }
}

// Listen for messages from the main thread
self.addEventListener('message', async (event) => {
    console.log("starting ...");
    // alert({
    //     content: 'Hello!'
    // });
    // Retrieve the translation pipeline. When called for the first time,
    // this will load the pipeline and save it for future use.
    let translator = await MyTranslationPipeline.getInstance(x => {
        // We also add a progress callback to the pipeline so that we can
        // track model loading.
        self.postMessage(x);
    });

    // Actually perform the translation
    let outputOfvalueIn = await translator(event.data.valueIn);
    let outputOfvalueOri = await translator(event.data.valueOri);



    // Send the output back to the main thread
    self.postMessage({
        status: 'complete',
        outputOfvalueIn: outputOfvalueIn.data,
        outputOfvalueOri:outputOfvalueOri.data
    });
});
