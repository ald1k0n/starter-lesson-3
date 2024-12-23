import { useState } from "react";
import { PortalWrapper } from "./components/PortalWrapper";
import { Button, Typography, Modal } from "antd";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      {open && (
        <PortalWrapper>
          <Typography.Title level={2}>I am a modal window</Typography.Title>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </PortalWrapper>
      )}
      {/* <Modal
        visible={open}
        onCancel={() => setOpen(false)}
        title="I am a modal window"
        footer={[
          <Button key="close" onClick={() => setOpen(false)}>
            Close
          </Button>,
        ]}
      >
        <Typography.Title level={2}>I am a modal window</Typography.Title>
      </Modal> */}
    </>
  );
}

export default App;
