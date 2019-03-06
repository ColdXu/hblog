import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import {
    Layout, Menu, Breadcrumb, Icon,
} from 'antd';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import MenuIcon from 'material-ui-icons/Menu';
import { MenuList, MenuItem } from 'material-ui/Menu';
import { withRouter } from 'react-router-dom';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import HomeIcon from 'material-ui-icons/Home';
import AddIcon from 'material-ui-icons/Add';
import NoteIcon from 'material-ui-icons/Note';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import history from '../../../common/util/history';
import Base from '../../../common/component/base';

import './index.less';

const {
    Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

const menuList = [
    {
        label: '博文列表',
        path: '/article',
        icon: 'inbox',
    },
];


  @connect(
      state => ({
          user: state.user,
          common: state.common,
      }),
  )
class LayoutCom extends Base {
    state = {
        menuSelectedKeys: [],
    }

    /**
     * 触发菜单导航选中项
     */
    handleMenuSelect = (item) => {
        this.setState({
            menuSelectedKeys: [item.path],
        });
    }

    /**
     * 触发菜单导航单击
     */
    handleMenuClick = (item) => {
        this.props.history.push(item.key);
    }

    renderMenu = () => {
        const { menuSelectedKeys } = this.state;

        const list = menuList.map(item => (
            <Menu.Item
                key={item.path}
            >
                {item.icon
                    && <Icon type={item.icon} />
                }
                <span>{item.label}</span>
            </Menu.Item>
        ));

        return (
            <Menu
                theme="dark"
                mode="inline"
                onSelect={this.handleMenuSelect}
                onClick={this.handleMenuClick}
                selectedKeys={menuSelectedKeys}
                style={{ borderRight: 0 }}
            >
                {list}
            </Menu>
        );
    }

    handleListClick = (item) => {
        if (this.history.location.pathname !== item.path) {
            this.history.push(item.path);
        }
    }

    render() {
        const { children, classes, common } = this.props;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed
                >
                    {this.renderMenu()}
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div>{this.props.children}</div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
  }


export default LayoutCom;
