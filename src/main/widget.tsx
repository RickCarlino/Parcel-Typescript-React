import * as React from "react";

export class Widget extends React.Component<{}, {}> {
  public render() {
    return <Layout>
      <Header>header</Header>
      <Layout>
        <Sider>left sidebar</Sider>
        <Content>main content</Content>
        <Sider>right sidebar</Sider>
      </Layout>
      <Footer>footer</Footer>
    </Layout>;
  }

  private handleClick(e: React.MouseEvent<HTMLElement>) {
    console.log("clicked", e.currentTarget.textContent);
  }
}
