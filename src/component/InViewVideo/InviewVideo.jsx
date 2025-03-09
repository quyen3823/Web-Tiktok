import { useEffect, useState } from "react";
import "./inviewvideo.scss";
import Users from "../User/user";
import { Link, useParams } from "react-router-dom";
export default function InViewVideo() {
  const { idVideo } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://tiktok.fullstack.edu.vn/api/videos/${idVideo}`)
      .then((res) => res.json())
      .then((result) => setData(result.data));
  }, [idVideo]);
  console.log(data.user && data.user.is_followed);
  return (
    <>
      {data && (
        <div className="app">
          <div className="video-scroll">
            <div className="background-image">
              <img
                src={data.thumb_url}
                alt=""
                className="img-background-video-tiktok"
              />

              <div className="video-inview-tiktok">
                <video
                  className="ahihi"
                  poster={data.thumb_url}
                  autoPlay
                  loop
                  src={data.file_url}
                  type="video/mp4"
                ></video>
              </div>
              <Link to="/">
                <button data-e2e="browse-close" className="button-x">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 9 10"
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1.35299 0.792837L4.49961 3.93944L7.64545 0.792566C7.8407 0.597249 8.15733 0.597223 8.35262 0.792508L8.70669 1.14658C8.90195 1.34184 8.90195 1.65842 8.70669 1.85368L5.56027 5.0001L8.70672 8.14655C8.90198 8.34181 8.90198 8.65839 8.70672 8.85366L8.35316 9.20721C8.1579 9.40247 7.84132 9.40247 7.64606 9.20721L4.49961 6.06076L1.35319 9.20719C1.15793 9.40245 0.841345 9.40245 0.646083 9.20719L0.292629 8.85373C0.0973708 8.65847 0.0973653 8.3419 0.292617 8.14664L3.43895 5.0001L0.292432 1.85357C0.0972034 1.65834 0.0971656 1.34182 0.292347 1.14655L0.645801 0.792924C0.841049 0.597582 1.1577 0.597543 1.35299 0.792837Z"></path>
                  </svg>
                </button>
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 48 48"
                width="40"
                height="40"
                data-e2e="browse-logo"
                className="logo-tiktok"
              >
                <g
                  fillRule="evenodd"
                  clipPath="url(#logo-icon_svg__a)"
                  clipRule="evenodd"
                >
                  <path
                    fill="#000"
                    d="M0 36c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12V12c0-6.628-5.373-12-12-12H12C5.373 0 0 5.372 0 12v24z"
                  ></path>
                  <path
                    fill="#25F4EE"
                    d="M30.636 6.288A9.23 9.23 0 0130.35 4h-6.97v26.133c0 3.014-2.056 5.457-5.062 5.457-3.006 0-5.443-2.443-5.443-5.456 0-3.014 2.437-5.457 5.443-5.457.6 0 .797.098 1.337.278v-7.051c-.562-.079-.754-.12-1.337-.12C11.515 17.785 6 23.315 6 30.135c0 6.82 5.515 12.349 12.318 12.349 6.708 0 12.357-5.375 12.51-12.062V17.049c2.528 1.733 5.395 2.746 8.689 2.746V13.19c-4.275 0-7.866-2.933-8.88-6.902z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M33.12 8.77a9.23 9.23 0 01-.287-2.288h-6.971v26.134c0 3.014-2.055 5.456-5.061 5.456s-5.443-2.442-5.443-5.456a5.45 5.45 0 015.443-5.456c.6 0 .797.097 1.337.277v-7.05c-.562-.08-.754-.12-1.337-.12-6.803 0-12.318 5.529-12.318 12.349S13.998 44.965 20.8 44.965c6.707 0 12.357-5.374 12.51-12.062V19.531c2.528 1.733 5.395 2.747 8.689 2.747v-6.606c-4.275 0-7.866-2.933-8.88-6.901z"
                  ></path>
                  <path
                    fill="#FE2C55"
                    d="M15.92 35.033a5.446 5.446 0 01-.562-2.416c0-3.014 2.437-5.457 5.443-5.457.523 0 .739.074 1.143.212l.194.066v-7.051l-.21-.03c-.411-.059-.623-.09-1.127-.09-.386 0-.769.018-1.146.053v4.635l-.194-.066c-.404-.138-.62-.212-1.143-.212-3.006 0-5.443 2.443-5.443 5.457a5.46 5.46 0 003.045 4.9zm-4.972 4.997a12.29 12.29 0 009.853 4.935c6.707 0 12.357-5.374 12.51-12.061V19.532c2.528 1.733 5.395 2.746 8.689 2.746v-6.605a9.2 9.2 0 01-2.483-.341v4.463c-3.294 0-6.161-1.013-8.69-2.746v13.372c-.152 6.688-5.802 12.062-12.509 12.062-2.763 0-5.314-.912-7.37-2.453zm23.455-28.401a9.206 9.206 0 01-3.715-5.146h2.145a9.155 9.155 0 001.57 5.146z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="logo-icon_svg__a">
                    <rect width="48" height="48" fill="#fff" rx="10.5"></rect>
                  </clipPath>
                </defs>
              </svg>
              <div className="video-sound">
                <div className="sound-bar">
                  <div className="sound-bar1"></div>
                  <div className="sound-bar2"></div>
                  <div className="sound-bar3"></div>
                </div>
                <button data-e2e="browse-sound" className="button-sound">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="24" cy="24" r="24"></circle>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21 16.9118C21 15.2513 20.8942 15.0909 20.709 15.0221C20.5238 14.9763 20.3122 14.9992 20.1799 15.1138L15.0741 19.5258H11.4762C11.2116 19.5258 11 19.7092 11 19.9384V28.084C11 28.3132 11.2116 28.4965 11.4762 28.4965H15.0741L20.1799 32.8862C20.3122 33.0008 20.5238 33.0237 20.709 32.9779C20.8942 32.9091 21 32.7487 21 32.5882V16.9118Z"
                      fill="white"
                    ></path>
                    <path
                      d="M30.6653 15C32.7348 17.2304 34.0001 20.2174 34.0001 23.5C34.0001 26.7826 32.7348 29.7696 30.6653 32"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M26.8799 17.8833C28.1994 19.381 28.9999 21.347 28.9999 23.5C28.9999 25.653 28.1994 27.6191 26.8799 29.1168"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="brower-report">
                <i className="fa-regular fa-flag"></i>
                <span>Báo cáo</span>
              </div>
              <button data-e2e="arrow-left" className="button-up">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 48 48"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M34.4142 22.5858L18.1213 6.29289C17.7308 5.90237 17.0976 5.90237 16.7071 6.29289L15.2929 7.70711C14.9024 8.09763 14.9024 8.7308 15.2929 9.12132L30.1716 24L15.2929 38.8787C14.9024 39.2692 14.9024 39.9024 15.2929 40.2929L16.7071 41.7071C17.0976 42.0976 17.7308 42.0976 18.1213 41.7071L34.4142 25.4142C35.1953 24.6332 35.1953 23.3668 34.4142 22.5858Z"
                  ></path>
                </svg>
              </button>
              <button data-e2e="arrow-right" className="button-down">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 48 48"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M34.4142 22.5858L18.1213 6.29289C17.7308 5.90237 17.0976 5.90237 16.7071 6.29289L15.2929 7.70711C14.9024 8.09763 14.9024 8.7308 15.2929 9.12132L30.1716 24L15.2929 38.8787C14.9024 39.2692 14.9024 39.9024 15.2929 40.2929L16.7071 41.7071C17.0976 42.0976 17.7308 42.0976 18.1213 41.7071L34.4142 25.4142C35.1953 24.6332 35.1953 23.3668 34.4142 22.5858Z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="right-video">
            <div className="container-right">
              <div className="fixed-profile">
                {data.user && (
                  <div className="content-user">
                    <Users item={data.user} />
                    <span className="follow-btn">
                      {data.user.is_followed ? (
                        <button className="show-action-follow active">
                          Đang Follow
                        </button>
                      ) : (
                        <button className="show-action-follow">Follow</button>
                      )}
                    </span>
                  </div>
                )}

                <div className="share-user-link">
                  <div className="description-invideo">
                    {data.description || "No cap"}
                  </div>
                  <h4 className="link-music">
                    Nhạc - {data.music || "Make Your Day"}
                  </h4>
                  <div className="container-linktoshare">
                    <div className="linkaction">
                      <div className="action-video">
                        <button
                          type="button"
                          className="tiktok-z2k845-ButtonActionItem e1hk3hf90"
                        >
                          <span
                            data-e2e="browse-like-icon"
                            className="tiktok-1dj5mqw-SpanIconWrapper tim pink"
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="rgba(255, 255, 255, .9)"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#HeartFill_clip0)">
                                <g filter="url(#HeartFill_filter0_d)">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7.5 2.25C10.5 2.25 12 4.25 12 4.25C12 4.25 13.5 2.25 16.5 2.25C20 2.25 22.5 4.99999 22.5 8.5C22.5 12.5 19.2311 16.0657 16.25 18.75C14.4095 20.4072 13 21.5 12 21.5C11 21.5 9.55051 20.3989 7.75 18.75C4.81949 16.0662 1.5 12.5 1.5 8.5C1.5 4.99999 4 2.25 7.5 2.25Z"
                                  ></path>
                                </g>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2.40179 12.1998C3.58902 14.6966 5.7592 16.9269 7.74989 18.75C9.5504 20.3989 10.9999 21.5 11.9999 21.5C12.9999 21.5 14.4094 20.4072 16.2499 18.75C19.231 16.0657 22.4999 12.5 22.4999 8.49997C22.4999 8.41258 22.4983 8.32566 22.4952 8.23923C20.5671 13.6619 13.6787 18.5 11.75 18.5C10.3127 18.5 5.61087 15.8131 2.40179 12.1998Z"
                                  fillOpacity="0.03"
                                ></path>
                              </g>
                              <defs>
                                <filter
                                  id="HeartFill_filter0_d"
                                  x="-0.9"
                                  y="1.05"
                                  width="25.8"
                                  height="24.05"
                                  filterUnits="userSpaceOnUse"
                                  colorInterpolationFilters="sRGB"
                                >
                                  <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                  ></feFlood>
                                  <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                  ></feColorMatrix>
                                  <feOffset dy="1.2"></feOffset>
                                  <feGaussianBlur stdDeviation="1.2"></feGaussianBlur>
                                  <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                                  ></feColorMatrix>
                                  <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow"
                                  ></feBlend>
                                  <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow"
                                    result="shape"
                                  ></feBlend>
                                </filter>
                                <clipPath id="HeartFill_clip0">
                                  <rect
                                    width="24"
                                    height="24"
                                    fill="white"
                                  ></rect>
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                          <strong
                            data-e2e="browse-like-count"
                            className="tiktok-14xas1m-StrongText e1hk3hf92"
                          >
                            {data.likes_count}
                          </strong>
                        </button>
                        <button
                          type="button"
                          disabled=""
                          className="tiktok-z2k845-ButtonActionItem e1hk3hf90"
                        >
                          <span
                            data-e2e="browse-comment-icon"
                            className="tiktok-1dj5mqw-SpanIconWrapper tim "
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#BubbleEllipsisRightFill_clip0)">
                                <g
                                  opacity="1"
                                  filter="url(#BubbleEllipsisRightFill_filter0_d)"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M16.0393 14.7137C17.75 13 18.75 11.215 18.75 9.13662C18.75 4.91897 14.8887 1.49997 10.125 1.49997C5.36129 1.49997 1.5 4.91897 1.5 9.13675C1.5 13.3545 5.48622 16.25 10.25 16.25V17.6487C10.25 18.0919 10.7095 18.3771 11.0992 18.1659C12.3166 17.5062 14.5725 16.183 16.0393 14.7137ZM5.93527 8.10679C6.61608 8.10679 7.16797 8.65471 7.16797 9.32962C7.16797 10.0059 6.61608 10.5538 5.93527 10.5538C5.2556 10.5538 4.70368 10.0059 4.70368 9.32962C4.70368 8.65471 5.2556 8.10679 5.93527 8.10679ZM11.3572 9.32962C11.3572 8.65471 10.8055 8.10679 10.125 8.10679C9.44459 8.10679 8.89289 8.65471 8.89289 9.32962C8.89292 10.0059 9.44462 10.5538 10.125 10.5538C10.8055 10.5538 11.3572 10.0059 11.3572 9.32962ZM14.3146 8.10679C14.9953 8.10679 15.5464 8.65471 15.5464 9.32962C15.5464 10.0059 14.9953 10.5538 14.3146 10.5538C13.6339 10.5538 13.082 10.0059 13.0821 9.32962C13.0821 8.65471 13.6339 8.10679 14.3146 8.10679Z"
                                  ></path>
                                </g>
                                <path
                                  opacity="0.1"
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M10.25 16.2499C10.25 16.2499 15.0278 15.8807 17.025 13.3234C15.0278 16.1364 13.0307 17.6708 11.2831 18.1822C9.53561 18.6937 10.25 16.2499 10.25 16.2499Z"
                                  fill="url(#BubbleEllipsisRightFill_paint0_linear)"
                                ></path>
                              </g>
                              <defs>
                                <filter
                                  id="BubbleEllipsisRightFill_filter0_d"
                                  x="0.5"
                                  y="1.49997"
                                  width="19.25"
                                  height="18.737"
                                  filterUnits="userSpaceOnUse"
                                  colorInterpolationFilters="sRGB"
                                >
                                  <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                  ></feFlood>
                                  <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  ></feColorMatrix>
                                  <feOffset dy="1"></feOffset>
                                  <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                                  <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                                  ></feColorMatrix>
                                  <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow"
                                  ></feBlend>
                                  <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow"
                                    result="shape"
                                  ></feBlend>
                                </filter>
                                <linearGradient
                                  id="BubbleEllipsisRightFill_paint0_linear"
                                  x1="8.50426"
                                  y1="15.6957"
                                  x2="9.29499"
                                  y2="18.1805"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop></stop>
                                  <stop offset="1" stopOpacity="0.01"></stop>
                                </linearGradient>
                                <clipPath id="BubbleEllipsisRightFill_clip0">
                                  <rect
                                    width="20"
                                    height="20"
                                    fill="white"
                                  ></rect>
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                          <strong
                            data-e2e="browse-comment-count"
                            className="tiktok-14xas1m-StrongText e1hk3hf92"
                          >
                            {data.comments_count}
                          </strong>
                        </button>
                      </div>
                      <div className="action-link-share">
                        <a
                          mode="0"
                          href="https://www.facebook.com/"
                          data-e2e="video-share-embed"
                          className="tiktok-ti40bm-AShareLink e15mchsh0"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path
                              fill="#383838"
                              fillOpacity="0.95"
                              fillRule="evenodd"
                              d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
                              clipRule="evenodd"
                            ></path>
                            <path
                              fill="white"
                              fillRule="evenodd"
                              d="M12.313 7.966a.562.562 0 111.108.194l-1.37 7.835a.562.562 0 11-1.109-.194l1.371-7.835zm3.927.808a.7.7 0 00-1.014 0 .76.76 0 000 1.05l2.228 2.307-2.228 2.305a.76.76 0 000 1.05.7.7 0 001.015 0l3.214-3.326a.042.042 0 000-.058l-.231-.24-.005-.004-.003-.004-2.976-3.08zm-7.351 0c.29.29.29.76 0 1.05L6.583 12.13l2.307 2.307a.742.742 0 11-1.05 1.05L5.423 13.07l-.002-.002-.91-.91a.04.04 0 010-.057L7.84 8.775c.29-.29.76-.29 1.05 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </a>
                        <a
                          mode="0"
                          href="https://www.facebook.com/"
                          data-e2e="video-share-message"
                          className="tiktok-ti40bm-AShareLink e15mchsh0"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                              fill="#FE2C55"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M18.7913 7.1875C18.6796 6.99413 18.4733 6.875 18.25 6.875H5.75001C5.50258 6.875 5.27845 7.02097 5.17839 7.24727C5.07834 7.47356 5.1212 7.73758 5.28771 7.9206L8.55021 11.5065C8.72305 11.6965 8.9945 11.7614 9.23456 11.6702L13.7656 9.94799C13.8184 9.92795 13.8423 9.93624 13.8527 9.94039C13.871 9.94765 13.8971 9.96649 13.9177 10.0013C13.9382 10.0361 13.9421 10.0681 13.9396 10.0876C13.9382 10.0987 13.9339 10.1237 13.8909 10.1602L10.1707 13.3155C9.97902 13.4782 9.90339 13.7398 9.97878 13.9796L11.4038 18.5124C11.4781 18.749 11.6853 18.9192 11.9317 18.9463C12.1781 18.9734 12.4173 18.8522 12.5413 18.6375L18.7913 7.81251C18.9029 7.61913 18.9029 7.38088 18.7913 7.1875Z"
                              fill="white"
                            ></path>
                          </svg>
                        </a>
                        <a
                          mode="0"
                          href="https://www.facebook.com/sharer/sharer.php?app_id=113869198637480&amp;display=popup&amp;sdk=joey&amp;u=https%3A%2F%2Fwww.tiktok.com%2F%40_wiyc.knz%2Fvideo%2F7170940720868527387%3Fis_from_webapp%3D1%26sender_device%3Dpc%26web_id%3D7170987985697359362"
                          target="_blank"
                          rel="noopener noreferrer"
                          data-e2e="video-share-facebook"
                          className="tiktok-ti40bm-AShareLink e15mchsh0"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 47C36.7025 47 47 36.7025 47 24C47 11.2975 36.7025 1 24 1C11.2975 1 1 11.2975 1 24C1 36.7025 11.2975 47 24 47Z"
                              fill="white"
                            ></path>
                            <path
                              d="M24 1C11.2964 1 1 11.2964 1 24C1 35.4775 9.40298 44.9804 20.3846 46.7205L20.3936 30.6629H14.5151V24.009H20.3936C20.3936 24.009 20.3665 20.2223 20.3936 18.5363C20.4206 16.8503 20.7542 15.2274 21.6288 13.7487C22.9722 11.4586 25.0639 10.3407 27.6335 10.0251C29.7432 9.76362 31.826 10.0521 33.9087 10.3407C34.0529 10.3587 34.125 10.3767 34.2693 10.4038C34.2693 10.4038 34.2783 10.6472 34.2693 10.8005C34.2603 12.4053 34.2693 16.0839 34.2693 16.0839C33.2685 16.0659 31.6096 15.9667 30.5096 16.138C28.6884 16.4175 27.6425 17.5806 27.6064 19.4108C27.5704 20.8354 27.5884 24.009 27.5884 24.009H33.9988L32.962 30.6629H27.5974V46.7205C38.597 44.9984 47.009 35.4775 47.009 24C47 11.2964 36.7036 1 24 1Z"
                              fill="#0075FA"
                            ></path>
                          </svg>
                        </a>
                        <a
                          mode="0"
                          href="https://wa.me/?text=https%3A%2F%2Fwww.tiktok.com%2F%40_wiyc.knz%2Fvideo%2F7170940720868527387%3Fis_from_webapp%3D1%26sender_device%3Dpc%26web_id%3D7170987985697359362"
                          target="_blank"
                          rel="noopener noreferrer"
                          data-e2e="video-share-whatsapp"
                          className="tiktok-ti40bm-AShareLink e15mchsh0"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M24 47C36.7025 47 47 36.7025 47 24C47 11.2975 36.7025 1 24 1C11.2975 1 1 11.2975 1 24C1 36.7025 11.2975 47 24 47Z"
                              fill="#25D366"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M30.9028 25.6129C30.5802 25.4515 28.9944 24.6713 28.6988 24.5635C28.4031 24.4559 28.1881 24.4021 27.9731 24.7249C27.758 25.0478 27.1399 25.7744 26.9517 25.9897C26.7636 26.2049 26.5754 26.2319 26.2529 26.0704C25.9303 25.909 24.891 25.5684 23.659 24.4694C22.7002 23.6141 22.0528 22.5579 21.8647 22.235C21.6765 21.9121 21.8446 21.7375 22.0061 21.5767C22.1512 21.4321 22.3287 21.2 22.4899 21.0116C22.6512 20.8233 22.705 20.6887 22.8125 20.4735C22.92 20.2582 22.8663 20.0699 22.7855 19.9085C22.7049 19.747 22.0599 18.1593 21.7911 17.5134C21.5293 16.8845 21.2634 16.9697 21.0654 16.9598C20.8774 16.9504 20.6622 16.9484 20.4472 16.9484C20.2322 16.9484 19.8827 17.0291 19.587 17.352C19.2914 17.6749 18.4581 18.4553 18.4581 20.0428C18.4581 21.6306 19.6139 23.1643 19.7752 23.3795C19.9365 23.5949 22.0496 26.8528 25.2853 28.2499C26.0548 28.5823 26.6557 28.7807 27.1241 28.9293C27.8968 29.1749 28.5999 29.1402 29.1557 29.0572C29.7754 28.9646 31.064 28.277 31.3328 27.5235C31.6016 26.7699 31.6016 26.1242 31.521 25.9897C31.4404 25.8551 31.2253 25.7744 30.9028 25.6129ZM25.0178 33.6472H25.0134C23.0881 33.6465 21.1998 33.1292 19.5524 32.1517L19.1606 31.9191L15.0998 32.9844L16.1837 29.0251L15.9286 28.6191C14.8546 26.9109 14.2873 24.9365 14.2881 22.9091C14.2905 16.9934 19.1037 12.1805 25.022 12.1805C27.8879 12.1815 30.5817 13.299 32.6076 15.3271C34.6333 17.3551 35.7482 20.0509 35.7471 22.9178C35.7447 28.8339 30.9315 33.6472 25.0178 33.6472ZM34.1489 13.7858C31.7117 11.3458 28.4706 10.0014 25.0173 10C17.902 10 12.111 15.7906 12.1082 22.908C12.1073 25.1832 12.7017 27.4039 13.8313 29.3617L12 36.0509L18.8432 34.2559C20.7287 35.2843 22.8516 35.8264 25.0121 35.827H25.0174H25.0174C32.132 35.827 37.9234 30.0359 37.9263 22.9184C37.9276 19.4691 36.5861 16.2258 34.1489 13.7858Z"
                              fill="white"
                            ></path>
                          </svg>
                        </a>
                        <a
                          mode="0"
                          href="https://twitter.com/intent/tweet?refer_source=https%3A%2F%2Fwww.tiktok.com%2F%40_wiyc.knz%2Fvideo%2F7170940720868527387%3Fis_from_webapp%3D1%26sender_device%3Dpc%26web_id%3D7170987985697359362&amp;text=https%3A%2F%2Fwww.tiktok.com%2F%40_wiyc.knz%2Fvideo%2F7170940720868527387%3Fis_from_webapp%3D1%26sender_device%3Dpc%26web_id%3D7170987985697359362"
                          target="_blank"
                          rel="noopener noreferrer"
                          data-e2e="video-share-twitter"
                          className="tiktok-ti40bm-AShareLink e15mchsh0"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M24.0002 47.001C36.7028 47.001 47.0002 36.7035 47.0002 24.001C47.0002 11.2984 36.7028 1.00098 24.0002 1.00098C11.2977 1.00098 1.00024 11.2984 1.00024 24.001C1.00024 36.7035 11.2977 47.001 24.0002 47.001Z"
                              fill="#1DA1F2"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M38.2029 13.5327C37.3894 14.0824 35.5215 14.8813 34.6003 14.8813V14.8829C33.5484 13.7237 32.0675 13 30.4252 13C27.2353 13 24.6488 15.7287 24.6488 19.0925C24.6488 19.5598 24.7001 20.0157 24.795 20.4529H24.794C20.4671 20.3331 15.7348 18.0452 12.886 14.1294C11.1344 17.3277 12.6501 20.8848 14.6378 22.1809C13.9574 22.235 12.7049 22.0982 12.1153 21.4913C12.0758 23.6142 13.0434 26.4269 16.5714 27.4473C15.8919 27.8329 14.6892 27.7223 14.1662 27.6402C14.3497 29.4322 16.7285 31.775 19.3297 31.775C18.4026 32.9063 14.9144 34.9582 11 34.3054C13.6584 36.0118 16.7568 37 20.0362 37C29.3556 37 36.5929 29.0322 36.2034 19.2027C36.2019 19.1919 36.2019 19.1811 36.2009 19.1693C36.2019 19.144 36.2034 19.1187 36.2034 19.0925C36.2034 19.0619 36.2009 19.0331 36.2 19.0035C37.0484 18.3914 38.1868 17.3087 39 15.8836C38.5284 16.1577 37.1134 16.7064 35.7968 16.8426C36.6418 16.3615 37.8937 14.7858 38.2029 13.5327Z"
                              fill="white"
                            ></path>
                          </svg>
                        </a>
                        <button className="tiktok-16m4i2o-ButtonShare ehlq8k37">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 48 48"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M26.4588 3.90871C25.3403 2.86068 23.4902 3.64074 23.4902 5.16041V13.0502C20.4499 14.1752 11.3194 18.1407 6.6047 26.6176C-1.49677 42.1311 3.82522 43.478 5.77105 39.7411C13.2467 29.1857 20.8146 30.4298 23.4902 31.3209V38.2274C23.4902 39.7114 25.2658 40.5055 26.4023 39.5298L43.3681 24.9655C44.9268 23.6274 44.9791 21.2608 43.4811 19.8573L26.4588 3.90871Z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="linkshare">
                      <p data-e2e="browse-video-link" className="link-tiktok">
                        https://www.tiktok.com/@_wiyc.knz/video/7170940720868527387?is_from_webapp=1&amp;sender_device=pc&amp;web_id=7170987985697359362
                      </p>
                      <button
                        data-e2e="browse-copy"
                        className="tiktok-j3izws-ButtonCopyLink ehlq8k36"
                      >
                        Sao chép liên kết
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="Lock-cmt">Bài đăng không thể bình luận</h4>

              <div className="mycomment">
                <div className="input-comment">
                  <div className="cm1">
                    <div className="search-input">
                      <div className="bar-input">
                        <input
                          type="text"
                          placeholder="Thêm bình luận..."
                          className="input-seach"
                        />
                      </div>
                      <div
                        data-e2e="comment-at-icon"
                        className="tiktok-1hhoqzc-DivMentionButton icon-input1"
                      >
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 48 48"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C28.0553 42 31.7921 40.6614 34.8006 38.401L35.6001 37.8003C36.0416 37.4686 36.6685 37.5576 37.0003 37.9992L38.2016 39.5981C38.5334 40.0397 38.4443 40.6666 38.0028 40.9983L37.2033 41.599C33.5258 44.3619 28.9513 46 24 46C11.8497 46 2 36.1503 2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24V26C46 30.4843 42.1949 34 37.8438 34C35.1966 34 32.8496 32.7142 31.3935 30.733C29.5649 32.7403 26.9303 34 24 34C18.4772 34 14 29.5228 14 24C14 18.4772 18.4772 14 24 14C29.5228 14 34 18.4772 34 24C34 24.5814 33.9502 25.1528 33.8541 25.7096C33.8473 25.8052 33.8438 25.902 33.8438 26C33.8438 28.2091 35.6347 30 37.8438 30C40.1201 30 42 28.1431 42 26V24C42 14.0589 33.9411 6 24 6ZM24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30C26.9395 30 29.3891 27.8841 29.9013 25.0918C29.9659 24.7392 30 24.3744 30 24C30 20.6863 27.3137 18 24 18Z"
                          ></path>
                        </svg>
                      </div>
                      <div
                        data-e2e="comment-emoji-icon"
                        className="tiktok-a3jj4p-DivEmojiButton icon-input2"
                      >
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 48 48"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6ZM2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24Z"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17 23C18.6569 23 20 21.2091 20 19C20 16.7909 18.6569 15 17 15C15.3431 15 14 16.7909 14 19C14 21.2091 15.3431 23 17 23Z"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M31 23C32.6569 23 34 21.2091 34 19C34 16.7909 32.6569 15 31 15C29.3431 15 28 16.7909 28 19C28 21.2091 29.3431 23 31 23Z"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16 28.3431C16 31.4673 19.5817 36 24 36C28.4183 36 32 31.4673 32 28.3431C32 25.219 16 25.219 16 28.3431Z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="cm2">Đăng</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
