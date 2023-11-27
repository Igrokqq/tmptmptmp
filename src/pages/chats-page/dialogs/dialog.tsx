import Modal from "../../../components/modal/Modal";
import ModalWrapper from "../../../components/modal-wrapper/ModalWrapper";
import ModalHeader from "../../../components/modal-header/ModalHeader";
import styles from "./dialogs.module.css";
import Divider from "../../../components/Divider/Divider";
import Input from "../../../components/input/Input";
import Typography from "../../../components/Typography";
import Buttons from "../../../components/buttons/Buttons";
import Button from "../../../components/button/Button";

const Dialog = () => {
  console.log();
  return (
    <div className={styles.wrapper}>
      <dialog open className={styles.dialog}>
        <div className={styles.box}>
          <ModalHeader title="Would you like to add comments about your rating?">
            <Divider />
          </ModalHeader>
          <Typography sx={{ alignSelf: "flex-start" }}>
            Select all labels that apply
          </Typography>
          <div className={styles.selectorWrapper}>
            <div className={(styles.selector, styles.selectorChecked)}>
              Lorem x
            </div>
            <div className={styles.selector}>Ipsum x</div>
            <div className={styles.selector}>Dolor x</div>
            <div className={styles.selector}>Sit x</div>
            <div className={styles.selector}>Amet x</div>
          </div>

          <Input
            container={{
              width: "100%",
            }}
            type="textarea"
            inputStyle={{
              width: "100%",
            }}
            placeholder="Tell us more about your conversation"
          ></Input>
        </div>
        <Buttons>
          <Button hasBorder type="button" className={styles.button}>
            Cancel
          </Button>
          <Button isAccent hasBorder type="submit" className={styles.button}>
            Submit Feedback
          </Button>
        </Buttons>
      </dialog>
    </div>
  );
};

export default Dialog;
