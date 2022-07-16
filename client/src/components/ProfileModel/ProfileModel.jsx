import React from "react";
import "./ProfileModel.css";

import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModel({ modalOpen, setModalOpen }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={modalOpen}
      onClose={() => setModalOpen(false)}
    >
      <form className="infoAuth">
        <h3>Your info</h3>
      </form>
    </Modal>
  );
}
export default ProfileModel;
