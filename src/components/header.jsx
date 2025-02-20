import React, { useState } from "react";
import { Button, Input, Dropdown, Menu, Switch, Divider } from "antd";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";

import './header.css'

export function Header({ setSelectedChapter }) {
  const [currentChapter, setCurrentChapter] = useState("第一回 灵根育孕源流出 心性修持大道生");

  const handleChapterSelect = (chapter) => {
    setCurrentChapter(chapter);
    setSelectedChapter(chapter);
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={() => handleChapterSelect("第一回 灵根育孕源流出 心性修持大道生")}>
      第一回 灵根育孕源流出 心性修持大道生
      </Menu.Item>
      <Menu.Item onClick={() => handleChapterSelect("第二回 悟彻菩提真妙理 断魔归本合元神")}>
       第二回 悟彻菩提真妙理 断魔归本合元神
      </Menu.Item>
      <Menu.Item onClick={() => handleChapterSelect("第三回 四海千山皆拱伏 九幽十类尽除名")}>
       第三回 四海千山皆拱伏 九幽十类尽除名
      </Menu.Item>
      <Menu.Item onClick={() => handleChapterSelect("第四回 官封弼马心何足 名注齐天意未宁 ")}>
      第四回 官封弼马心何足 名注齐天意未宁 
      </Menu.Item>
      <Menu.Item onClick={() => handleChapterSelect("第五回 乱蟠桃大圣偷丹 反天宫诸神捉怪")}>
      第五回 乱蟠桃大圣偷丹 反天宫诸神捉怪
      </Menu.Item>
      <Menu.Item onClick={() => handleChapterSelect("第六回 观音赴会问原因 小圣施威降大圣")}>
      第六回 观音赴会问原因 小圣施威降大圣
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="header">

      <div className="container">
        <Dropdown overlay={menu} trigger={['click']}>
          <Button className="dropdown-button">
          西游记 - {currentChapter} <DownOutlined className="icon" />
          </Button>
        </Dropdown>
      </div>

      <div className="search-wrapper">
        <Input
          prefix={<SearchOutlined classNameName="text-muted-foreground" />} placeholder="请输入书名或作者" classNameName="search-input"
        />
      </div>


      <nav className="nav">
        <Button type="text" size="small">登陆</Button>
        <Button type="text" size="small">注册</Button>
        <Dropdown trigger={['click']}>
          <Button type="text" size="small">设置 <DownOutlined /></Button>
        </Dropdown>
      </nav>

    </header>
  );
}
