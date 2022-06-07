import React, {Component} from 'react';
import {ArrowLeftOutlined} from '@ant-design/icons';
import {Tabs, Tag, Button, Space, Table,} from 'antd';
import styles from './index.less';
import dataSource from '../../../static/dataSource/index'

const getRequest = () => {
    let url = '?' + location.hash.split('?')[1]; //获取url中"?"符后的字串
    let theRequest = new Object();
    if (url.indexOf("?") != -1) {
        let str = url.substr(1);
        let strs = str.split("&");
        for (let i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
console.log(getRequest())
const columns = [
    {
        title: '项目名称',
        dataIndex: 'name',
        key: 'name',
    },

    {
        title: '项目地址（点击跳转）',
        dataIndex: 'address',
        key: 'address',
        width: 650,
        ellipsis: true,
        render: (text) => <a href={text} target='_blank'>{text}</a>
    },
    {
        title: '项目创建者',
        dataIndex: 'user',
        key: 'user',
    }, {
        title: '前端',
        key: 'web',
        dataIndex: 'web',
    },
    {
        title: '后端',
        key: 'server',
        dataIndex: 'server',
    },
    {
        title: '项目经理',
        key: 'pm',
        dataIndex: 'pm',
    },
    {
        title: '测试人员',
        key: 'test',
        dataIndex: 'test',
    },
    {
        title: '操作',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>删除</a>
            </Space>
        ),
    },
];
const EPGdataSource = dataSource.find(v => v.code === getRequest()['code'])['mg']
const MGdataSource = dataSource.find(v => v.code === getRequest()['code'])['epg']


const {TabPane} = Tabs;
const onChange = (key) => {
    console.log(key);
};
export default class SliderLogin extends Component {

    render() {
        return <div className={styles.login}>
            <div className="back" onClick={() => {
                location.replace('/#/')
            }}>
                <ArrowLeftOutlined/>
            </div>
            <div className={'title'}>{getRequest()['name'] || '-'}</div>

            <Tabs defaultActiveKey="1" className={'pannel'} onChange={onChange}>
                <TabPane tab="EPG" key="1" style={{padding: '10px'}}>
                    <Button type={'primary'} style={{marginBottom: '10px'}}>新增</Button>
                    <Table columns={columns} scroll={{
                        y: 'calc(100vh - 230px)',
                    }} bordered pagination={false} dataSource={EPGdataSource}/>
                </TabPane>
                <TabPane tab="管理端" key="2" style={{padding: '10px'}}>
                    <Button type={'primary'} style={{marginBottom: '10px'}}>新增</Button>
                    <Table columns={columns}
                           scroll={{
                               y: 'calc(100vh - 230px)',
                           }}
                           bordered
                           pagination={false}
                           dataSource={MGdataSource}/>
                </TabPane>
            </Tabs>


        </div>
    }
};