import React, { Component } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import {
  Layout,
  Menu,
  Breadcrumb,
  Avatar,
  Button,
  Card,
  Col,
  Row,
  Dropdown,
  Statistic,
  Progress,
} from "antd";
import data from "./data.json";
import ChartsPage from "./chart";
import ChartsPage2 from "./chart2";

import {
  DesktopOutlined,
  TabletOutlined,
  MobileOutlined,
  PieChartOutlined,
  SettingOutlined,
  UserOutlined,
  PictureOutlined,
  FontSizeOutlined,
  SkinOutlined,
  LogoutOutlined,
  BellOutlined,
  DownOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
  ReloadOutlined,
  MenuOutlined,
  DropboxOutlined,
  DollarOutlined,
  WeiboCircleOutlined,
  TeamOutlined,
  CodepenCircleOutlined,
  MoreOutlined,
  ProjectOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);

export default class Home extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo">
            <Avatar src="https://www.kimdawsonagency.com/wp-content/uploads/2020/03/Addison-Joaquin-01.jpg" />
            <h4>shen zi</h4>
            <h6>profile</h6>
          </div>

          <Menu theme="darkblue" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              Users
            </Menu.Item>
            <Menu.Item key="2" icon={<SkinOutlined />}>
              Products
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Authentication
            </Menu.Item>
            <Menu.Item key="2" icon={<FontSizeOutlined />}>
              Typography
            </Menu.Item>
            <Menu.Item key="2" icon={<PictureOutlined />}>
              Icons
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Account
            </Menu.Item>
            <Menu.Item key="2" icon={<SettingOutlined />}>
              Settings
            </Menu.Item>
            {/* <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu> */}
            {/* <Menu.Item key="9" icon={<FileOutlined />} /> */}
            <div style={{ paddingTop: 20 }}>
              <div className="logo2" style={{ marginLeft: 70 }}>
                <Avatar src="https://www.freeiconspng.com/uploads/document-icon-1.png" />
              </div>
              <h4 style={{ paddingLeft: 40, paddingTop: 10 }}>
                Upgrade to PRO
              </h4>
              <h6 style={{ paddingLeft: 40, paddingTop: 10 }}>
                get more components
              </h6>
              <Button
                style={{
                  backgroundColor: "blue",
                  marginLeft: 40,
                  marginTop: 10,
                  borderRadius: 5,
                  color: "white",
                }}
              >
                UPGRADE
              </Button>
            </div>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header>
            <Menu
              theme="dark"
              mode="horizontal"
              style={{ backgroundColor: "blue", paddingLeft: 1100 }}
            >
              <Menu.Item key="1" icon={<BellOutlined />} />
              <Menu.Item key="2" icon={<LogoutOutlined />} />
            </Menu>
          </Header>
          {/* <Header className="site-layout-background" style={{ padding: 0 }}> */}
          {/* <Menu theme="darkblue" defaultSelectedKeys={["1"]} mode="horizontal" mode="inline">
            <Menu.Item key="9" icon={<LogoutOutlined />} />
            <Menu.Item key="9" icon={<BellOutlined />} />
          </Menu> */}
          {/* </Header> */}
          {/* <Content style={{ margin: "0 16px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                Bill is a cat.
              </div>
          </Content> */}
          <Content>
            <div className="site-card-wrapper" style={{ margin: 20 }}>
              <Row gutter={16}>
                <Col span={6}>
                  <Card style={{ borderRadius: 5 }}>
                    <p
                      style={{
                        display: "inline",
                        marginRight: 160,
                        fontWeight: "bold",
                      }}
                    >
                      Budget
                    </p>
                    <WeiboCircleOutlined
                      style={{ color: "red", fontSize: 32 }}
                    />
                    <h5 style={{ textAlign: "left" }}>$24,500</h5>
                    <div style={{ textAlign: "left" }}>
                      <ArrowDownOutlined
                        style={{ display: "inline", color: "red" }}
                      />
                      <p style={{ display: "inline" }}>12% rises the budget</p>
                    </div>
                  </Card>
                  {/* <Card
                    extra={<Avatar src="../assets/budget-44-444115.webp" />}
                    style={{ borderRadius: 10 }}
                  >
                    <p>$23,500</p>
                    <ArrowUpOutlined style={{ display: "inline" }} />
                    <p style={{ display: "inline" }}>rises the budget</p>
                  </Card> */}
                </Col>
                <Col span={6}>
                  <Card style={{ borderRadius: 5 }}>
                    <p
                      style={{
                        display: "inline",
                        marginRight: 135,
                        fontWeight: "bold",
                      }}
                    >
                      Total Users
                    </p>
                    <TeamOutlined
                      style={{
                        backgroundColor: "green",
                        color: "white",
                        fontSize: 32,
                      }}
                    />
                    <h5 style={{ textAlign: "left" }}>1600</h5>
                    <div style={{ textAlign: "left" }}>
                      <ArrowUpOutlined
                        style={{ display: "inline", Color: "green" }}
                      />
                      <p style={{ display: "inline" }}>
                        15% rises the progress
                      </p>
                    </div>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card style={{ borderRadius: 5 }}>
                    <p
                      style={{
                        display: "inline",
                        marginRight: 125,
                        fontWeight: "bold",
                      }}
                    >
                      Task process
                    </p>
                    <ProjectOutlined
                      style={{
                        backgroundColor: "blue",
                        color: "white",
                        fontSize: 32,
                      }}
                    />
                    <h5 style={{ textAlign: "left" }}>75.5%</h5>
                    <Progress percent={75.5} status="active" />
                  </Card>
                </Col>
                <Col span={6}>
                  <Card style={{ borderRadius: 5, backgroundColor: "blue" }}>
                    <p
                      style={{
                        display: "inline",
                        marginRight: 130,
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      Total Profit
                    </p>
                    <DollarOutlined style={{ color: "white", fontSize: 32 }} />
                    <h5
                      style={{
                        textAlign: "left",
                        color: "white",
                        paddingTop: 20,
                      }}
                    >
                      $23,200
                    </h5>
                  </Card>
                </Col>
              </Row>
            </div>
            <div className="site-card-wrapper" style={{ margin: 20 }}>
              <Row gutter={16}>
                <Col span={18}>
                  <Card style={{ borderRadius: 5 }}>
                    <p
                      style={{
                        display: "inline",
                        marginRight: 700,
                        fontWeight: "bold",
                      }}
                    >
                      Latest sales
                    </p>
                    <Dropdown overlay={menu}>
                      <a
                        className="ant-dropdown-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        Last 7days
                        <DownOutlined style={{ marginLeft: 2 }} />
                      </a>
                    </Dropdown>

                    <ChartsPage data={data} />
                  </Card>
                </Col>
                <Col span={6}>
                  <Card style={{ borderRadius: 5 }}>
                    <p
                      style={{
                        display: "inline",
                        marginRight: 120,
                        fontWeight: "bold",
                      }}
                    >
                      Users By Device
                    </p>
                    <ReloadOutlined />
                    <br></br>
                    <br></br>
                    <ChartsPage2 />
                    <br></br>
                    <br></br>
                    <br></br>
                    <div>
                      <div style={{ display: "inline", padding: 5 }}>
                        <DesktopOutlined></DesktopOutlined>
                        <p style={{ display: "inline", padding: 5 }}>Desktop</p>
                      </div>

                      <div style={{ display: "inline", padding: 5 }}>
                        <TabletOutlined></TabletOutlined>
                        <p style={{ display: "inline", padding: 5 }}>Tablet</p>
                      </div>
                      <div style={{ display: "inline", padding: 5 }}>
                        <MobileOutlined></MobileOutlined>
                        <p style={{ display: "inline", padding: 5 }}>Mobile</p>
                      </div>
                    </div>
                    <div>
                      <p
                        style={{
                          display: "inline",
                          padding: 25,
                          color: "blue",
                        }}
                      >
                        63%
                      </p>
                      <p
                        style={{ display: "inline", padding: 25, color: "red" }}
                      >
                        15%
                      </p>
                      <p
                        style={{
                          display: "inline",
                          padding: 25,
                          color: "orange",
                        }}
                      >
                        23%
                      </p>
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
            <div className="site-card-wrapper" style={{ margin: 20 }}>
              <Row gutter={16}>
                <Col span={6}>
                  <Card style={{ borderRadius: 5 }}>
                    <p
                      style={{
                        display: "inline",
                        marginRight: 125,
                        fontWeight: "bold",
                        paddingBottom: 20,
                      }}
                    >
                      Latest Products
                    </p>
                    <div style={{ paddingTop: 10 }}>
                      <DropboxOutlined
                        style={{ display: "inline", paddingRight: 10 }}
                      />
                      <h5 style={{ display: "inline" }}>Dropbox</h5>
                      <MoreOutlined
                        style={{ display: "inline", paddingLeft: 140 }}
                      />
                    </div>
                    <div style={{ paddingTop: 10 }}>
                      <DropboxOutlined
                        style={{ display: "inline", paddingRight: 10 }}
                      />
                      <h5 style={{ display: "inline" }}>Mobiles-</h5>
                      <MoreOutlined
                        style={{ display: "inline", paddingLeft: 140 }}
                      />
                    </div>
                    <div style={{ paddingTop: 10 }}>
                      <DropboxOutlined
                        style={{ display: "inline", paddingRight: 10 }}
                      />
                      <h5 style={{ display: "inline" }}>Desktop</h5>
                      <MoreOutlined
                        style={{ display: "inline", paddingLeft: 140 }}
                      />
                    </div>
                  </Card>
                </Col>
                <Col span={18}>
                  <Card style={{ borderRadius: 5 }}>
                    <p
                      style={{
                        display: "inline",
                        marginRight: 660,
                        fontWeight: "bold",
                      }}
                    >
                      Latest Orders
                    </p>
                    <Button>New Entry</Button>
                    <div
                      style={{
                        borderBottom: "1px solid grey",
                        paddingTop: 10,

                        opacity: 12,
                      }}
                    ></div>

                    <div style={{ paddingTop: 10 }}>
                      <h5 style={{ display: "inline", paddingRight: 230 }}>
                        Order Ref
                      </h5>
                      <h5 style={{ display: "inline", paddingRight: 180 }}>
                        Customer
                      </h5>
                      <h5 style={{ display: "inline", paddingRight: 180 }}>
                        Date
                        <DownOutlined />
                      </h5>
                      <h5 style={{ display: "inline", paddingRight: 80 }}>
                        Status
                      </h5>
                    </div>
                    <div
                      style={{
                        borderBottom: "1px solid grey",
                        paddingTop: 10,

                        opacity: 12,
                      }}
                    ></div>

                    <div style={{ paddingTop: 10 }}>
                      <h5 style={{ display: "inline", paddingRight: 240 }}>
                        CDD1645
                      </h5>
                      <h5 style={{ display: "inline", paddingRight: 190 }}>
                        Ashlok
                      </h5>
                      <h5 style={{ display: "inline", paddingRight: 170 }}>
                        24/07/20
                      </h5>
                      <h5 style={{ display: "inline", paddingRight: 50 }}>
                        pending
                      </h5>
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          </Content>

          <Footer style={{ textAlign: "center" }}></Footer>
        </Layout>
      </Layout>
    );
  }
}
