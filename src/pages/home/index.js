import React, {Component} from 'react';
import {PlusOutlined} from '@ant-design/icons';
import styles from './index.less'
import dataSource from '../../../static/dataSource/index'

export default class SliderLogin extends Component {
    jump = (item) => {
        location.href = '/#/item?code=' + item.code + '&name=' + escape(item.name)
    }

    showSelect = () => {
        console.log(123)
    }

    render() {
        return <div className={styles.login}>
            <div className='nav'>
                局点项目导航页
            </div>
            {
                dataSource.map((v, i) => {
                    return (
                        <div className='item' ref={'item_' + i}
                             onClick={() => {
                                 this.jump(v)
                             }}
                             key={i}
                             onMouseLeave={() => {
                                 this.refs['item_' + i].className = 'item'
                             }
                             }
                             onMouseEnter={() => {
                                 this.refs['item_' + i].className = 'item item_enter'
                             }}

                        >{v.name}</div>
                    )
                })

            }
            <div className='add'>
            </div>
        </div>
    }
};