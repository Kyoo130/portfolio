import React from "react";
import styled from "styled-components";

const ModalCont = styled.article`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  z-index: 20;
`;

const ModalContents = styled.div`
  width: 100%;
  max-width: 1140px;
  height: 100%;
  padding: 2.5rem 1.25rem;
  margin: 0 auto;
  border-radius: 0.5rem;
  background-color: #fff;
  color: #181818;
  overflow: scroll;

  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  row-gap: 2rem;

  @media (min-width: 768px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: auto;
    white-space: pre-wrap;
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  color: #181818;
  letter-spacing: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

const ListCont = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

const BoldText = styled.span`
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #006ad5;
  padding-left: 0.25rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Contents = styled.p`
  background-color: #eee;
  padding: 1rem 1rem;
  border-radius: 0.5rem;
`;

const CloseBtn = styled.button`
  background-color: #006ad5;
  font-weight: 600;
  font-size: 1rem;
  color: #fff;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  margin: 0 auto;

  :hover {
    opacity: 0.925;
  }
`;

const Modal = ({ handleModalOpen }) => {
  return (
    <ModalCont>
      <ModalContents>
        <Title>QnA</Title>
        <ListCont>
          <li>
            <BoldText>Q1.️ 자기소개</BoldText>
            <Contents>
              안녕하세요. 서비스 운영 업무 경험을 토대로 성장하고 싶은 프론트엔드 개발자 이규민입니다.{"\n"}
              저는 IT 기업에서 고객 서비스 상담부터 CS Solution 기획 및 운영에 대한 경험을 보유하고 있습니다.
              <br /><br />
              간단한 고객 안내부터 고객 민원 대응까지 CS 관련 전반적인 업무를 수행하였고,{"\n"}
              더 나아가 CS 상담 시스템 고도화 기획 및 서비스 운영 담당자로서 역할을 하였습니다.
              <br /><br />
              서비스 운영 담당자로 업무할 당시 내부 출차 관리 기록을 엑셀 문서로 운영하고 있어 데이터 관리에{"\n"}
              어려움을 줄이기 위해 유관 부서와 적극적으로 소통하여 사내 시스템을 기획하고 개선한 경험이 있습니다.
              <br /><br />
              현재 개발자가 되기 위해 기존에 다니던 직장을 퇴사한 후 멋쟁이사자처럼에서 운영하는 프론트엔드{"\n"}
              부트캠프 과정을 수료하였고, 동기들과의 스터디를 통해 함께 성장하며 개발 공부를 이어가고 있습니다.
            </Contents>
          </li>
          <li>
            <BoldText>Q2. 개발자로 직무를 전향한 계기</BoldText>
            <Contents>
              서비스 운영 담당자로 일할 당시 고객센터 시스템을 관리하고 고도화하는 업무를 담당하였습니다.{"\n"}
              업무할 당시, 내부 출차 관리 기록을 엑셀 문서로 운영하고 있어 데이터 관리에 어려움이 많았습니다.
              <br /><br />
              이를 해결하기 위한 방법으로 내부 시스템 고도화를 기획하였고, 이 과정에서 개발 지식에 대한 이해가 요구되었습니다.{"\n"}
              퇴근 후 별도로 개발 공부를 하여 그 지식을 토대로 비효율적인 프로세스를 개선하는 결과를 가져올 수 있었습니다.
              <br /><br />
              위 경험을 계기로 본격적으로 프론트엔드 개발자가 되기 위해 공부를 시작하였고,{"\n"}
              개발이란 것이 노력한 만큼 결과물을 만들어 낼 수 있다는 점이 흥미롭고, 뜻깊게 다가왔습니다.
              <br /><br />
              많은 고민 끝에 다니던 직장을 퇴사한 후 프론트엔드 개발자가 되기 위해 부트캠프에 참여하며 지금까지 개발 공부를 이어가고 있습니다.
            </Contents>
          </li>
          <li>
            <BoldText><span>Q3.</span> 개발자로서 향후 목표</BoldText>
            <Contents>
              먼저, 회사에 입사하여 다양한 실무를 경험하고, 업무 외적으로도 개별 스터디를 진행하여 프로젝트{"\n"}
              설계 및 디자인 패턴을 공부하며, 프론트엔드 개발자로서 탄탄한 실력을 갖출 수 있도록 성장하는 것 입니다.
              <br /><br />
              이후 5년 안에 지금의 저와 같이 프론트엔드 개발자를 목표로 하는 주니어들을 위한 블렌디드 러닝{"\n"}
              과정을 만들어 그들의 멘토로서 혼자서가 아닌 함께 성장할 수 있는 개발 리드가 되는 것이 목표입니다.
            </Contents>
          </li>
        </ListCont>
        <CloseBtn onClick={() => {
          handleModalOpen(false);
        }}>돌아가기
        </CloseBtn>
      </ModalContents>
    </ModalCont>
  );
};

export default Modal;
