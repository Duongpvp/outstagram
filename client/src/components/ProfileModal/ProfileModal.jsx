import React from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import "./ProfileModal.css";
function ProfileModal({ modalOpened, setModalOpened }) {
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
      size="50%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm">
        <h3>Your infor</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            name="First Name"
            placeholder="First Name"
          />
          <input
            type="text"
            className="infoInput"
            name="Last Name"
            placeholder="Last Name"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="WorkAt"
            placeholder="Work At"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="livesIn"
            placeholder="LIves in"
          />

          <input
            type="text"
            className="infoInput"
            name="Country"
            placeholder="Country"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="RelationShip Status"
          />
        </div>

        <div>
          <span>Profile Image</span>
          <input type="file" name="profileImg" id="chooseFile"/>
          <span>Cover Image</span>
          <input type="file" name="coverImg" id="chooseFile"/>
        </div>

        <button className="btn Info-btn">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
