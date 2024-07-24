import React, { useState, useRef } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Mancity from "../../assets/images/Mancity.png";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const modalBackground = useRef();

  return (
    <>
      <div className="Header">
        <div className="Header-left">
          <Link to="/">
            <div className="page-name">⚽ FC 4포메이션</div>
          </Link>
          <div className="Head-menu">
            <Link to="/Formation-percent">
              <div className="menu-name">📉 포메이션 이용률 보기</div>
            </Link>
          </div>
          <img
            className="mancity-icon"
            src={Mancity}
            alt="맨시티 아이콘 이미지"
          />
        </div>

        <div className="Header-right">
          <div className="right-menu">
            <div onClick={() => setModalOpen(true)}>로그인</div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          className="modal-container"
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setModalOpen(false);
            }
          }}
        >
          <div className="modal-content">
            <div className="icon">⚽ 로그인 하기</div>

            <form className="login-form">
              <div className="login-text">
                <p>이메일</p>
                <input type="email" placeholder="이메일을 입력해주세요." />
              </div>
              <div className="login-text">
                <p>비밀번호</p>
                <input type="password" placeholder="비밀번호를 입력해주세요." />
              </div>
              <div className="modal-button">
                <button type="submit">로그인</button>
              </div>
              <div className="modal-menu">
                <div
                  onClick={() => {
                    setJoinModalOpen(true);
                    setModalOpen(false);
                  }}
                >
                  회원가입
                </div>
                <div
                  onClick={() => {
                    setPasswordModalOpen(true);
                    setModalOpen(false);
                  }}
                >
                  비밀번호 찾기
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {joinModalOpen && (
        <div
          className="modal-container"
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setJoinModalOpen(false);
            }
          }}
        >
          <div className="modal-content">
            <div className="join">⚽ 회원가입</div>

            <form className="join-form">
              <div className="join-text">
                <p>이름</p>
                <input type="text" placeholder="ex)홍길동" />
              </div>
              <div className="join-text">
                <p>이메일</p>
                <input type="email" placeholder="이메일을 입력해주세요." />
              </div>
              <div className="join-text">
                <p>비밀번호</p>
                <input type="password" placeholder="비밀번호를 입력해주세요." />
              </div>
              <div className="join-text">
                <p>비밀번호 확인</p>
                <input
                  type="password"
                  placeholder="비밀번호를 한번 더 입력해주세요."
                />
              </div>
              <div className="modal-joinbutton">
                <button>회원가입</button>
              </div>
              <div
                className="join-backButton"
                onClick={() => {
                  setJoinModalOpen(false);
                  setModalOpen(true);
                }}
              >
                <button>뒤로가기</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {passwordModalOpen && (
        <div
          className="modal-container"
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setPasswordModalOpen(false);
            }
          }}
        >
          <div className="modal-content">
            <div className="password">⚽ 비밀번호 찾기</div>
            <form className="login-form">
              <div className="pw-text">
                <p>이메일</p>
                <input
                  name="email"
                  type="text"
                  placeholder="이메일을 입력해주세요."
                />
              </div>
              <div className="pw-text">
                <p>이름</p>
                <input type="text" placeholder="이름을 입력해주세요." />
              </div>
              <div className="modal-backButton">
                <button>비밀번호 찾기</button>
              </div>
              <div
                className="pw-backButton"
                onClick={() => {
                  setPasswordModalOpen(false);
                  setModalOpen(true);
                }}
              >
                <button>뒤로가기</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
