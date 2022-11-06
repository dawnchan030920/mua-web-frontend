import React, {useRef} from "react";
import styled from "styled-components";
import HomeLayout from "../../components/Layout/HomeLayout";
import logoLargeUrl from "../../assets/img/logoLarge.svg";
import {Helmet} from "react-helmet";
import IconNode from "../../components/Basic/IconNode";
import {ReactComponent as Organization24} from "../../assets/icons/organization24.svg";
import {ReactComponent as News24} from "../../assets/icons/news24.svg";
import useAxios from "axios-hooks";
import {useInViewport} from "ahooks";
import {HeightTransition, HorizontalMoveTransition, OpacityTransition} from "../../components/Basic/Transition";
import Carousel from "nuka-carousel";
import {SubtleButton} from "../../components/Basic/Button";
import { ReactComponent as ChevronLeft24 } from "../../assets/icons/chevronLeft24.svg";
import { ReactComponent as ChevronRight24 } from "../../assets/icons/chevronRight24.svg"
import { ReactComponent as Timeline24 } from "../../assets/icons/timeline24.svg";

const Tag = styled.div.attrs<{color: string}>({})<{color: string}>`
  height: 1.6rem;
  width: fit-content;
  padding: 0.2rem 0.5rem;
  border-radius: 0.8rem;
  border: 1.5px solid ${props => props.color};
  background-color: transparent;
  display: flex;
  align-items: center;
  color: ${props => props.color};
  font-weight: 500;
  font-size: 0.8rem;
  letter-spacing: 0.2rem;
  margin-bottom: 0.5rem;
  box-shadow: 0 0 4px ${props => props.color};
`

const AcrylicPanel = styled.div`
  border: solid transparent;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  backdrop-filter: blur(20px) saturate(80%) brightness(90%);
  background-color: rgba(255, 255, 255, 0.72);
  padding: 1.5rem 2rem;
  width: fit-content;
`

const GradientTextContainer = styled.div.attrs<{from: string; to: string}>({})<{from: string; to: string}>`
  background-image: linear-gradient(to right bottom, ${props => props.from}, ${props => props.to});
  color: transparent;
  -webkit-background-clip: text;
`

const DirectingLine = styled.div.attrs<{gradient:string, height: string, upToBottom: boolean}>({})<{gradient: string, height: string, upToBottom: boolean}>`
  width: 4px;
  height: ${props => props.height};
  background-image: linear-gradient(${props => props.gradient});
  ${props => props.upToBottom ? "border-top-left-radius: 2px; border-top-right-radius: 2px; border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;" : "border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-left-radius: 2px; border-bottom-right-radius: 2px;"}
`

const LineContentLayout = styled.div`
  display: grid;
  grid-template-columns: 10% 1fr;
  width: 100%;
  height: 100%;
`

const LineTagContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;
  grid-column: 1;
  height: 100%;
`

const ContentContainer = styled.div`
  grid-column: 2;
  width: 100%;
  height: 100%;
  padding-right: 5%;
`

const IntroductionContentContainer = styled(ContentContainer)`
  background-image: url(${logoLargeUrl});
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  @media (max-width: 767px) {
    background-position: bottom;
  }
`

const NewsContentContainer = styled(ContentContainer)`
  padding-top: calc(200px - 12px);
  padding-bottom: 3rem;
`

const TimelineContentContainer = styled(ContentContainer)`
  padding-top: calc(200px - 12px);
  padding-bottom: 3rem;
`

const IconNodeContainer = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
`

type BannerDataType = {
    banner: [
        {
            pid: number;
            img: string;
        }
    ]
}

type TimelineDataType = {
    timeline: [
        {
            pid: number;
            name: string;
            description: string;
            time: string;
        }
    ]
}

const HomePage: React.FC = () => {
    const NewsDisplayRef = useRef(null);
    const TimelineDisplayRef = useRef(null);
    const [{data: bannerData, loading: isBannerLoading, error: isBannerError}] = useAxios("/api/banner/getBanner/IndexHeader");
    const [{data: timelineData, loading: isTimelineLoading, error: isTimelineError}] = useAxios("/api/timeline/getTimeline");
    const [, newsInViewportRatio] = useInViewport(NewsDisplayRef, {
        threshold: [0, 0.2, 0.4, 0.8, 1]
    });
    const [, timelineInViewportRatio] = useInViewport(TimelineDisplayRef, {
        threshold: [0, 0.2, 0.4, 0.8, 1]
    });

  return (
      <>
          <Helmet>
              <title>MUA | 中国高校 MC 联盟</title>
          </Helmet>
          <HomeLayout>
              <div style={{
                  height: `100vh`,
                  width: `100%`
              }}>
                  <LineContentLayout>
                      <LineTagContainer>
                          <DirectingLine height={`calc(50% - 25px)`} gradient={`transparent, transparent`} upToBottom={true} />
                          <IconNodeContainer>
                              <IconNode icon={<Organization24 />} color={`rgb(85, 107, 185)`} />
                          </IconNodeContainer>
                          <DirectingLine height={`calc(50% - 25px)`} gradient={`rgb(85, 107, 185), rgb(133, 110, 166)`} upToBottom={true} />
                      </LineTagContainer>
                      <IntroductionContentContainer>
                          <AcrylicPanel>
                              <Tag color={`rgb(85, 107, 185)`}>组织</Tag>
                              <GradientTextContainer to={`rgb(147, 231, 102)`} from={`rgb(85, 107, 185)`}>
                                  <div style={{
                                      fontSize: `2rem`,
                                      fontWeight: `600`
                                  }}>
                                      联络 · 联合 · 联盟
                                  </div>
                                  <div style={{
                                      fontSize: `4rem`,
                                      fontWeight: `800`
                                  }}>
                                      中国高校 Minecraft 联盟
                                  </div>
                                  <div style={{
                                      fontSize: `1.5rem`,
                                      fontWeight: `500`
                                  }}>
                                      Minecraft University Alliance
                                  </div>
                              </GradientTextContainer>
                          </AcrylicPanel>
                      </IntroductionContentContainer>
                  </LineContentLayout>
              </div>
              <div style={{
                  width: `100%`,
                  height: `auto`
              }}>
                  <LineContentLayout ref={NewsDisplayRef}>
                      <LineTagContainer>
                          <DirectingLine height={`200px`} gradient={`rgb(133, 110, 166), #ec2F4B`} upToBottom={false} />
                          <OpacityTransition duration={`0.5s`} isActive={(newsInViewportRatio as number) > 0.8}>
                              <IconNodeContainer>
                                  <IconNode icon={<News24 />} color={`#ec2F4B`} />
                              </IconNodeContainer>
                          </OpacityTransition>
                          <div style={{
                              flexGrow: `1`
                          }}>
                              <HeightTransition duration={`0.6s`} isActive={(newsInViewportRatio as number) > 0.8} delay={`0.1s`} style={{
                                  height: `100%`
                              }}>
                                  <DirectingLine height={`auto`} gradient={`#ec2F4B, #ec2F4B, white`} upToBottom={true} style={{
                                      height: `100%`
                                  }} />
                              </HeightTransition>
                          </div>
                      </LineTagContainer>
                      <NewsContentContainer>
                          <HorizontalMoveTransition duration={`0.6s`} isActive={(newsInViewportRatio as number) > 0.8} delay={`0.15s`}>
                              <AcrylicPanel>
                                  <Tag color={`#ec2F4B`}>新闻</Tag>
                                  <div style={{
                                      fontSize: `2rem`,
                                      fontWeight: `600`
                                  }}>
                                      最近都在做些什么？
                                      <div style={{
                                          color: `#ec2F4B`
                                      }}>
                                          MUA 会开展活动、项目，成员也会进行各自的实践。
                                      </div>
                                  </div>
                              </AcrylicPanel>
                          </HorizontalMoveTransition>
                      </NewsContentContainer>
                  </LineContentLayout>
              </div>
              <div style={{
                  display: `flex`,
                  justifyContent: `center`
              }}>
                  <AcrylicPanel style={{
                      width: `94vw`,
                      maxHeight: `50vw`,
                      height: `auto`
                  }}>
                      {isBannerLoading && <span>Banner is still loading ...</span>}
                      {isBannerError && <span>Something went wrong with banner ...</span>}
                      {(!isBannerError && !isBannerLoading) && (
                          <Carousel wrapAround={true} slidesToShow={1} pauseOnHover={true} autoplay={true} animation={`zoom`} renderCenterLeftControls={({previousSlide}) => (
                              <div style={{
                                  marginLeft: `0.5rem`
                              }}>
                                  <SubtleButton click={previousSlide} icon={<ChevronLeft24 />} />
                              </div>
                          )} renderCenterRightControls={({nextSlide}) => (
                              <div style={{
                                  marginRight: `0.5rem`
                              }}>
                                  <SubtleButton click={nextSlide} icon={<ChevronRight24 />} />
                              </div>
                          )} style={{
                              borderRadius: `2rem`
                          }}>
                              {(bannerData as BannerDataType).banner.map((value, index, _array) => {
                                  console.log(typeof bannerData);
                                  return (
                                      <img src={value.img} alt={value.img} style={{
                                          objectFit: `cover`,
                                          width: `100%`
                                      }} />
                                  )
                              })}
                          </Carousel>
                      )}
                  </AcrylicPanel>
              </div>
              <div style={{
                  width: `100%`,
                  height: `auto`
              }}>
                  <LineContentLayout ref={TimelineDisplayRef}>
                      <LineTagContainer>
                          <HeightTransition duration={`0.6s`} isActive={timelineInViewportRatio as number > 0.2}>
                              <DirectingLine height={`200px`} gradient={`transparent, #2E8B57`} upToBottom={false} />
                          </HeightTransition>
                          <OpacityTransition duration={`0.6s`} isActive={timelineInViewportRatio as number > 0.8}>
                              <IconNodeContainer>
                                  <IconNode icon={<Timeline24 />} color={`#2E8B57`} />
                              </IconNodeContainer>
                          </OpacityTransition>
                          <div style={{
                              flexGrow: `1`
                          }}>
                              <HeightTransition duration={`0.6s`} isActive={timelineInViewportRatio as number > 0.8} delay={`0.1s`} style={{
                                  height: `100%`
                              }}>
                                  <DirectingLine height={`auto`} gradient={`#2E8B57, #2E8B57, transparent`} upToBottom={true} style={{
                                      height: `100%`
                                  }} />
                              </HeightTransition>
                          </div>
                      </LineTagContainer>
                      <TimelineContentContainer>
                          <HorizontalMoveTransition duration={`0.6s`} isActive={timelineInViewportRatio as number > 0.8} delay={`0.15s`}>
                              <AcrylicPanel>
                                  <Tag color={`#2E8B57`}>时光机</Tag>
                                  <div style={{
                                      fontSize: `2rem`,
                                      fontWeight: `600`
                                  }}>
                                      自从 2020 年 11 月 成立以来，
                                      <div style={{
                                          color: `#2E8B57`
                                      }}>
                                          两年的时间里，随着各大高校的加入，MUA 逐渐羽翼丰满。
                                      </div>
                                  </div>
                              </AcrylicPanel>
                          </HorizontalMoveTransition>
                      </TimelineContentContainer>
                  </LineContentLayout>
              </div>
              <div style={{
                  display: `flex`,
                  justifyContent: `center`
              }}>
                  <AcrylicPanel style={{
                      width: `94vw`
                  }}>
                      {isTimelineLoading && <span>Timeline is still loading ...</span>}
                      {isTimelineError && <span>Something went wrong with the timeline ...</span>}
                      {(!isTimelineError && !isTimelineLoading) && (
                          <>
                              {(timelineData as TimelineDataType).timeline.map((value, index, _array) => {
                                  return (
                                      <>
                                      </>
                                  )
                              })}
                          </>
                      )}
                  </AcrylicPanel>
              </div>
          </HomeLayout>
      </>
  )
};

export default HomePage;
