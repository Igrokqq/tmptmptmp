import { Container } from "react-bootstrap"
import css from './chatcontactbar.module.css';
import BackButton from "./backbtn";
import UserRating from "./userrating";
import Avatar from "./avatar";
import iconUser from '../assets/icon-user.svg';

type Props = {chat: Record<any, any>}

export const ChatContactBar = ({chat}: Props) => {
  return (
    <Container className={`${css.container} d-flex align-items-center justify-content-between p-3`}>
      <div className="d-flex align-items-center">
        <BackButton />
        <Avatar src={iconUser} className={css.avatar} alt=""/>
        <div className="mx-3">
          <div>{chat.name}</div>
          <div className={css.title}>{chat.title}</div>
        </div>
      </div>
      <UserRating />
    </Container>
  )
}
