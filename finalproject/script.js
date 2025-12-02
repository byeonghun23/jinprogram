/* ------------------------
   DOM 요소
------------------------- */
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalYear = document.getElementById("modal-year");
const modalDesc = document.getElementById("modal-desc");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

const rerollBtn = document.getElementById("reroll-btn");
const randomBtn = document.getElementById("random-btn");
const menuBtn = document.getElementById("menu-btn");
const dropdown = document.getElementById("dropdown");

let openedByRandom = false;


/* ------------------------
   등장인물 데이터
------------------------- */
const characters = {
  "드래곤볼": [
    { name: "손오공", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F52%2F49%2F60_715249_main_image_new_1438244439032.jpg" },
    { name: "부르마", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F52%2F50%2F60_715250_main_image_new_1438244428601.jpg" },
    { name: "크리링", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F52%2F52%2F60_715252_main_image_new_1438244404859.jpg" },
    { name: "무천도사", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F52%2F51%2F60_715251_main_image_new_1438244418486.jpg" },
    { name: "피라프", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F52%2F54%2F60_715254_main_image_new_1438244384460.jpg" }
  ],
  
    "가치아쿠타": [
     { name: "루도", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA4MTFfMjgz%2FMDAxNzU0ODgwOTUzNjE4.pVf5IZDbMQ_k0nKEfMtcwSbG7V0bludtFnzYzO05xyog.8tiOceVlntyPTSZLv0_umVkI0UIvynrvgdJqjuXEPIMg.JPEG%2F2025-07-14_%25BA%25D0%25B3%25EB%25C7%25D1_%25B7%25E7%25B5%25B5_15.jpg&type=sc960_832" },
     { name: "엔진", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAzMThfMTU4%2FMDAxNzQyMzA5MTYzNTY1.jyHl2eMrkia0br8V5Cns4NIqmMLcioaxtKvXHRa3zDAg.OAGfOeAS_Mt6iCUKGHW5HLWkSnoKETXtAu5RJbN-9gEg.JPEG%2F8.jpg&type=sc960_832" },
  ],

    "괴수 8호": [
    { name: "히비노 카프카", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA4MTFfNSAg%2FMDAxNzIzMzY2NzgxODcy.Jkzj798xVDY8OXfnj41-_EqWL-nUXZ_reEnZRMneyawg.fCiAmKM-ag9vaq3L-kS-_Ediz1-5FEgHYoD_p81qmp0g.JPEG%2F1723366780886.jpg&type=sc960_832" },
    { name: "이치카와 레노", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTEwMTJfMjQ0%2FMDAxNzYwMjQ1NzM2MTQy.1VesZPZwv9WLMNSBLlViCENeg279k_Ogf7YWRf_PYu8g.0-BwufjZyeg-95QbfCO85GL8cUxtTzRLsb6zth_bn6Ig.JPEG%2Foutput%25A3%25DF1522743860.jpg&type=sc960_832" },
    { name: "아시로 미나", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA0MjRfMTEw%2FMDAxNzQ1NTA2NzYwMjE4.3zzRa3QbmEUlWvvXslGLVmGulBlsq7FqWAb4LBp-Dq0g.VxDzuwlBxBNdzq_yF5ardsw2LITr6NQeawQzH2kqETAg.PNG%2FIMG_9281.PNG&type=sc960_832" },
    { name: "호시나 소우시로", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDExMjVfMjk1%2FMDAxNzMyNTEyNTM3NTQ0.I_MfuZyhmBKexUmQnKfd4WqnMXHQ83hxscfFIMZFO2Mg.k47r8TMw4SkNn94e64Gh6rFAp9lDifxfSZ347wUwe5Yg.PNG%2Fimage.png&type=sc960_832" },
    { name: "시노미야 키코루", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA4MTFfMjI3%2FMDAxNzIzMzY2ODE3NzEx.pTjhpaTmWX_SfNyPpm1VHVyC4BczUoWEYWn8g9WaYhgg.Mx2CFUcfRhtainMll66oqz4Vc9R9_q5VoqgVfLideLMg.JPEG%2F1723366817103.jpg&type=sc960_832" },
  ],
      "사카모토데이즈": [
    { name: "사카모토 타로", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA5MTZfMzQg%2FMDAxNzU3OTU0NDE5OTQ0.1YjKtOOOkQqpCnaZ_OJo4qQOvai3xzUnHvbx1JV5Af0g.YjXPPaEyRDbgK-pRxLEH7bGTsgSLq7-td0PdTcKxCeog.PNG%2F%25BD%25BA%25C5%25A9%25B8%25B0%25BC%25A6%252828088%2529.png&type=a340" },
    { name: "아사쿠라 신", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAxMjFfMTEg%2FMDAxNzM3NDQ2MzE4MjMz.32M0aygBEeJB7P8VAQH2oVIINqdA2xizLmyReKX9hx0g.F6SPLFxBx2RfAXYhUgbd31eWjK0wvICvhvgw8Be-8-gg.PNG%2F%25BB%25E7%25C4%25AB%25B8%25F0%25C5%25E4_%25B5%25A5%25C0%25CC%25C1%25EE___2%25C8%25AD_00_11.png&type=sc960_832" },
    { name: "루 샤오탕", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA0MDlfOSAg%2FMDAxNzQ0MjAwNTEwNjU1.D5q-K7TBxmSolrKhN0VswBZ5LrC6icJpJOgMFtyN0bkg.I7pYktDl-fXRzm4Ps1FhfWWJgWIRnfrw1GJhOoSyY3Ig.PNG%2Fimage.png&type=sc960_832" },
    { name: "사마모토 아오이", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAyMTFfNDYg%2FMDAxNzM5MjY0NjcyMzU1.NHE5vIJqpJJYTbsZbGM8iFVt7LtdX4P-pknEN-SOIY0g.1m0N-VRDSr0VYgf4ifCGwITL-3zJp0NxzMvWID_DnQAg.JPEG%2Foutput_1312910120.jpg&type=sc960_832" },
    { name: "슬러", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA2MTVfMjEy%2FMDAxNzQ5OTgzMjU3ODMz.zy8QEkuPqlqnEpLOpjaKVPdd75L9xanvBp0K9b_-6Scg.WV754EEbWrJHHscg6vVRVMYQ9Mtoans4v65FICSxyHEg.JPEG%2FIMG%25A3%25DF6339.jpg&type=sc960_832" },
  ],
      "나 혼자만 레벨업": [
    { name: "성진우", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAxMDRfMTIg%2FMDAxNjQxMjc4NDQ0MTAz.Z_gXZIDja4nqCGQYK1FCyBDKEUVvN_Ks9JUZePgCQ90g.r_Bk3tJRFrk6AWPb8G4XD5FukA04AECTrfU5t3HnbgMg.JPEG.yyun1230%2F%25B4%25D9%25BF%25EE%25B7%25CE%25B5%25E5.jpg&type=sc960_832" },
    { name: "차해인", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA3MjNfMTUz%2FMDAxNzUzMjM4MTg3MDQ0._rM_898vrW9GJW33Gk7z7Soojve3ZhVxluuJTxlkr7Yg.6WHn7pmQ_Itk8sBlV-_EIEt3QHUbXYIrWwyaG5sxjUEg.JPEG%2F%25C2%25F7%25C7%25D8%25C0%25CE.jpg&type=sc960_832" },
    { name: "성진아", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAyMDlfOTYg%2FMDAxNzM5MDk1ODkxMTgy.TYJLxOcX36CRVo-KXFLrttBn_Zu_Fyx1SGLu2o8Ggpcg.qTkq_8zJCEqm7q-FfTPKmBnsWpa7lc_DfL_gu5x3v3Ag.PNG%2Fimage.png&type=sc960_832" },
  ],
      "이세계 유유자적 농가": [
    { name: "마치오 히라쿠", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA0MDZfNjEg%2FMDAxNjgwNzQ3OTYyNzkw.C7T5Q07qRTQ6CrzOAoakni2JjC_yJ9AdfD8_QuBTXAkg.oV95SRtCvazPmy4ZZh-2JWq9wcEe6INDQd1LV7XGQa0g.JPEG.fprlwk%2F800_400isekai-nonbiri-nouka_1678430925.jpg&type=sc960_832" },
    { name: "루루시루", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA0MjVfMTQz%2FMDAxNzQ1NTgwMjk5MDQ4.5mPRg2NVqb7cQbvCHcTz48EdAyM6Mn3er21zlprB-qcg.Xsn32UOwSgKVhYPGIXwUiVlgsC1GAke-6GNJvOImfZkg.JPEG%2Fmaxresdefault.jpg&type=sc960_832" },
    { name: "티어", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MjdfMjI0%2FMDAxNjkzMTEyMjc3MzM1.LDnB92PrLIgyDkhfmMnxaUCKkMPaFmKjfxdLx8k2SI4g.If-O0ZY8TdAjhEbkI3mBZKsP5gH68r7JSU6Y_ehQC5Eg.JPEG.darsyche%2FVideoCapture_20230720-002509.jpg&type=sc960_832" },
  ],
     "장송의 프리렌": [
    { name: "프리렌", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA5MjJfMjI4%2FMDAxNzI3MDAzMTg4ODE3.m1_LVT3b0_oeVy7Hc9emRbRjN51B8y4cpvCG7iYxZiog.Bt0e_xxnuR0mS7nruKH9o1uiWb8TxId4Jg8aejLdF14g.PNG%2Fscreencapture-coupangplay-play-78d407a7-7bb0-4db9-9a26-3a00b35f4bc1-episode-.png&type=sc960_832" },
    { name: "힘멜", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMDJfMjMy%2FMDAxNzA0MjAwNjk1NDUw.8w5WJQoH5_5hmaXIuQ1iM4oMZ6cgi6ESSL9u3_Y6wW4g.4XyU6QjuoSGi30XXEpQsFa8BoxzGPUhhXDq9saXtbygg.JPEG.kilaring%2FIMG_7085.jpg&type=sc960_832" },
    { name: "페른", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA0MTJfMjM1%2FMDAxNzEyODQ5NjY0OTY0.AiBnOhiQeMT44texcc58lCFrxebn2S-p-jPOrXuUFsIg.2MjQ0eptKOkUxUlakS3N_QIHFyWufezAKGjKm5g7nEMg.JPEG%2FScreenshot%25A3%25DF20240412%25A3%25AD003310%25A3%25DFSamsung_Internet.jpg&type=sc960_832" },
    { name: "슈타르크", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMjlfMjA2%2FMDAxNzMwMTgwMzg3MTI1.q0r1Yjf0LYFQomgHTLJJoOZ0I2L35aaR2wQVMWv1ScAg.nZagkh9i9OoKRdfUb_tblLh81ClFTVwciBrvcbNMli0g.JPEG%2F%25C0%25E5%25BC%25DB%25C0%25C7%25C7%25C1%25B8%25AE%25B7%25BB_%252824%2529.JPG&type=sc960_832" },
  ],
     "체인소맨": [
    { name: "덴지", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTEwMDhfODMg%2FMDAxNzU5OTAzNzEyMDI2.A14pg5NlMi639MgNvBNmtewoCojLWrokiHEABUiDk6Eg.B4DWNhLRrfdkfg3RBiSwcq9YhAaU_TdXp5bkMpY-5PEg.JPEG%2F8%25C0%25A7.jpg&type=sc960_832" },
    { name: "마키마", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA4MDNfMTEw%2FMDAxNzIyNjkzNjc2OTI5.-kd-I55rFvDydCM69ZUatYe-PsFFJn8uXJZoAHrIXdwg.2pc_pVEffR2o1eFVBUxOBg_Zx5n5YNEm23v_S4vQWZQg.JPEG%2F48f584af08f12c4cbd7c80e950b9d67f.jpg&type=sc960_832" },
    { name: "아키", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMDVfMjk2%2FMDAxNjY3NjAyMDQxNzQ5.GYNWcyIpornF0zTl6gbkzM3k8800XhemZQydce4nGDIg.QJ3p_uyMLAFBgQt-Cabd8KeIsoWmt8762PzVCHKANKgg.PNG.mickeyhobby%2F1667602038_3801_65651.png&type=sc960_832" },
    { name: "파워", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEyMjhfMTU5%2FMDAxNjcyMjI1MzU0OTE5.yfSi3Oho2-N-aswUW7W-e-pRcG7k4xY6Dhi-Bgk3vWog.MFchMDYxZk0YlDom1w3wc4LgtJ-GJ_5IgNM1hxBqZFAg.PNG.elfin_day%2F%25C3%25BC%25C0%25CE%25BC%25D2%25B8%25C7_%25C8%25F7%25B8%25DE%25B3%25EB_%25BE%25C6%25C5%25B0_%25C6%25C4%25BF%25F6_%25B5%25A7%25C1%25F6_%25B8%25B6%25C5%25B0%25B8%25B6_%25C4%25DA%25BA%25A3%25B4%25CF_%252841%2529.png&type=sc960_832" },
  ],
     "블루록": [
    { name: "이사기", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMDhfMjI4%2FMDAxNjc4Mjc2ODk2NDg4.ZQBIqYEtGPV35zfXZe7Y3QpmgkyEi-pE8nF-Y-DxPMYg.d-KQ_iVoDq44CyPcfcZgRijIW04GVeYTAgCnI0Pz-A4g.JPEG.qm61633%2F%25B4%25D9%25BF%25EE%25B7%25CE%25B5%25E51.jpg&type=sc960_832" },
    { name: "바치라", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAyMDFfMjg0%2FMDAxNzM4NDE5MTQyOTAz.CJRI-WSVebNskRVtRcWAnGMu2K_uZ2DVrQB48rNGesUg.mO6iaQYTUFrq3by4Nl8Y3pFr8XlmUDOePOgAC3AL2psg.JPEG%2FIMG_3779.JPG&type=sc960_832" },
  ], 
     "아케인": [
    { name: "바이", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTEwMzBfNDUg%2FMDAxNzYxODEzNjk4OTk2.G52CRU8SSwccIf8oRW4ls_gAX_MxpsOSJHHvbyeGrWMg.ZxUlerD2ZPCxHjtooTRhqVYjLOkJS7-T3bkyxL_DjmQg.JPEG%2FIMG%25A3%25DF0163.jpg&type=sc960_832" },
    { name: "징크스", img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi3.ruliweb.com%2Fimg%2F21%2F11%2F25%2F17d54ea7fc947bf60.jpg&type=sc960_832" }
  ],
      "주술회전": [
    { name: "이타도리 유지", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA5MDRfMjc4%2FMDAxNzI1NDAxOTI5OTA2.jXkhbaRUCcaA_6NivvZbkb28oT9FV-4W_nW7ZBxKGesg.FoEMlUXSrdrs62BWR5RRBOK_NYRz-yUiQ0zjAap9SwAg.JPEG%2Foutput_473233164.jpg&type=sc960_832" },
    { name: "호시구로 메구미", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA5MjNfMTQ0%2FMDAxNzU4NjMzNjk1MDY3.HscJ_Y8mVX_-0fzcTYFryuMA27bEy-7j9xTR0huJAxAg.FfRDhrsV5QZNcFNGQyzlJGNcbfk4LzPtzGJi2r0Qb5Yg.JPEG%2FIMG%25A3%25DF5500.JPG&type=a340" },
    { name: "고죠 사토루", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEyMjVfOTUg%2FMDAxNzAzNTA3OTEyOTc5.bPlHv3nUnNxPl-fIHBqXcBu89iJNVGZkMETgKA4S5fkg.KMdGi0-ZMCbINsgEOJuOas2x0ipHj8PKFMLYdhf5X2wg.JPEG.vskdoll%2F302e404e69125dae61ac575a3ae38c5a.jpeg&type=sc960_832" },
    { name: "스쿠나", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMTNfNzcg%2FMDAxNjQ0NzE3MzA3MDU5.fOczsPwLcotKf8t-uObWFD1R0ZPCA8cr1zCX_XYsWCsg.wlIMvVJ8nkcVgEir6YCIgG8dQQ1LStar7A7VakjZDS8g.JPEG.k8582575%2Fbatch_Ohys-Raws_Jujutsu_Kaisen_-_05_%2528TBS_1280x720_x264_AAC%2529.mp4_000600975.jpg&type=sc960_832" },
  ],
     "귀멸의 칼날": [
    { name: "카마도 탄지로", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA5MDRfMjg1%2FMDAxNzU2OTQyODc4MzY3.0OM7mRuSHekflA9n3F_qS8L3Fe9AAWtWilnawgpAiDYg.TjuylniOj68S90VrX2n9fZ7r020zGkdoZQ8aum2PnsEg.PNG%2F1.png&type=sc960_832" },
    { name: "카마도 네즈코", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTExMDJfMTky%2FMDAxNzYyMDgzMjMwMzA3.8_id0JVV07Wlw3tBcG80JtrhU3z17hCexKQfSHAur_Ug.JQjmdKWFkaoALo55AfvH6wn_Za2K8W0afj48qzOx6O8g.JPEG%2F%25B4%25D9%25BF%25EE%25B7%25CE%25B5%25E5%25A3%25AD4.jpeg&type=sc960_832" },
    { name: "아가츠마 젠이츠", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA4MTBfMTU3%2FMDAxNzU0Nzk2OTU4NTI5.Y01ZvoC51363q3zUuFE2cuVS0Gc0LgRKC-RmVNH2wlog.QU26TZvRpREIyJSMWdOozjZ6-lC2E0ydLb2NFVgQMJog.JPEG%2Fimgi_218_81A4zZTPylL._AC_SL1500_.jpg&type=sc960_832" },
    { name: "하시바라 이노스케", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA5MDdfMjM4%2FMDAxNzU3MjEwMTA5MjAx.Fr61-6q1WOgEGYImJP2K9fdKCx2pAlePK08U2Hoq6GEg.lyfM37zpn2pTC0CTIk_38NPly-i7_bdWWwj8baapLMkg.JPEG%2F8963ff817dfaf02173a11358b855403c.jpg&type=sc960_832" },
    { name: "키브츠지 무잔", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTEwMDdfMTk4%2FMDAxNzU5ODIzNzI3ODUy.Gmis-6fiHInz6qM8s3U-UYoSn9Fy1cPGw2_F0ts76Ywg.OXtkZLbnSw8U-Zh0fLcf7YgyrebcqVT852TQ-4PUqKEg.JPEG%2FIMG%25A3%25DF4046.JPG&type=sc960_832" },
  ],
     "나의 히어로 아카데미아": [
    { name: "미도리야 이즈쿠(데쿠)", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAzMTdfMTMw%2FMDAxNTg0NDEwMjMyNTUw.JFZdez4kWbdpY4wKMx4TrE2VWi6EOsi80JkmUg1lvp4g.JNYQVSIpMVZCcYhmrPU-cf8243MkXU8pDdHwr7N9wFQg.JPEG.animalanime%2F%25B9%25CC%25B5%25B5%25B8%25AE%25BE%25DF.jpg&type=sc960_832" },
    { name: "올마이트(야기토시노리)", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA0MTFfMTk0%2FMDAxNTU0OTYzOTEyNDM2.cVr2RkaI-CMX7nNGHOnGLqLXx8lYzsA_NGzW7veEtBUg.lGfzXVWUAiqW7tTLQv_Tnbw7H-_aP5EXFmjMUM0K2pIg.JPEG.sasa0099%2FDtGYGoyU4AEJyOw.jpg&type=sc960_832" },
    { name: "바쿠고 카츠키", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA5MDVfMTM2%2FMDAxNzU3MDQ1Njk4MDAy.EZHzKtt_10nSEkvj50cZBD5Ugl5h1rn6nw0B0uaPVJ8g.nBTBfhxO6r3yNXDnDlfZpjpCTY_tlQhkKH_EUJ7f2MMg.JPEG%2FIMG%25A3%25DF2326.JPG&type=sc960_832" },
    { name: "토도리키 쇼토", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA5MThfMTYg%2FMDAxNzI2NjY2MDg0MTA2.sUYRtCn3jG0wybCVMljoCwWirU201qFske_WDvWTDMkg.P4tuRfGP2XqM6QYKkJPVYisvUpJ-iowN5Ur09Ot-zGYg.JPEG%2F%25B4%25D9%25BF%25EE%25B7%25CE%25B5%25E5%25A3%25AD14.jpeg&type=sc960_832" },
    { name: "우라아카 오챠코", img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fyt3.googleusercontent.com%2Fytc%2FAIdro_ngn-Mrg3qvhWq_W7uyqULIxaLpqi1yr2Z4JkZDzduYxC0%3Ds900-c-k-c0x00ffffff-no-rj&type=sc960_832" },
  ],
     "아따맘마": [
    { name: "엄마", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20120411_146%2Fdnjzlxhzl11_1334149324924skImz_JPEG%2FB1D7B8B2_angel0775.jpg&type=sc960_832" },
    { name: "아빠", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20110826_138%2Fearlybird11_13143183184118Wj0c_JPEG%2Fchi3.jpg&type=sc960_832" },
    { name: "오아리", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20110824_260%2Fearlybird11_1314147312160Dhp0a_JPEG%2Ftachibana_tri.jpg&type=sc960_832" },
    { name: "오동동", img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fyt3.googleusercontent.com%2FIbj2mORTmqIgl6OdKX3uU1feTKKRBqhPn-DPv1MyEk2KQ_G5XQhj9ERMF_W5vk4kzRmCNNtoAA%3Ds900-c-k-c0x00ffffff-no-rj&type=sc960_832" },
  ],
       "원펀맨": [
    { name: "사이타마", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA2MzBfMTk5%2FMDAxNTkzNDk3MjI0NTIz.Q68-E6eqrA1zdFAx3qyaJwJPfI8aTP3rdeb45Wvc6Ncg.HpIKcpo8ZonwcTKuJ1yehiRPDgTwbHwZLNMuU-c6aTgg.PNG.dog-and-cat%2FSaitama.%2528One.Punch.Man%2529.full.2686421.png&type=sc960_832" },
    { name: "제노스", img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fyt3.googleusercontent.com%2Fytc%2FAIdro_kJkaxljeXuK9tNIwROCazcs0jOL81LdiD6GbX2AeSphXk%3Ds900-c-k-c0x00ffffff-no-rj&type=sc960_832" },
    { name: "타츠마키", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA0MDJfMjI3%2FMDAxNzQzNTc4NDgwNjM0.meYVkBC92E-GHoDIdYWrgYCL4QUGyOazISV_7Db5_Ccg.Yk83Fk0kWyke_x3vSU9dXGJ5FZ-ebZRlTgRk-FRCGb8g.JPEG%2FKakaoTalk_20250402_145339445.jpg&type=sc960_832" },
  ],
     "기생수": [
    { name: "이즈미신이치", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA5MjFfMTYw%2FMDAxNTA1OTE5ODAwNDYz.Mt1AQ2_S3yvmY5dM8kb6bqfTLI-Gn6Zu6tRKARmYk0Eg.vkjiujY7Dn5EC14a91FAwnioEAP875zEvkkyjVOeYrUg.JPEG.ptj0969%2FCfqcw1rUkAAi2hh.jpg&type=sc960_832" },
    { name: "미기", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MTVfMTkx%2FMDAxNjkyMDI4MzMwOTMx.arpGK0YrqmUh-JAn3BdbGQ4e1-Kcghw4iEjQ0Ilm4mEg.4VhqECyea2Ve9pjTqKvgAp55QWmDXLREzwK-gdaq8jcg.JPEG.jjh020800%2FScreenshot%25A3%25DF20230815%25A3%25DF001146%25A3%25DFChrome.jpg&type=sc960_832" },
    { name: "타미야료코", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MTVfMTkx%2FMDAxNjkyMDI4MzMwOTMx.arpGK0YrqmUh-JAn3BdbGQ4e1-Kcghw4iEjQ0Ilm4mEg.4VhqECyea2Ve9pjTqKvgAp55QWmDXLREzwK-gdaq8jcg.JPEG.jjh020800%2FScreenshot%25A3%25DF20230815%25A3%25DF001146%25A3%25DFChrome.jpg&type=sc960_832" },
    { name: "고토", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20150301_151%2F0194246357_1425216891187xegKq_JPEG%2Fgo.jpg&type=sc960_832" },
  ],
       "일곱 개의 대죄": [
    { name: "엘리자베스 리오네스", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20150423_251%2Fkwy6970_1429801160713xiwIy_PNG%2F%25BF%25A4%25B8%25AE%25C0%25DA%25BA%25A3%25BD%25BA.PNG&type=sc960_832" },
    { name: "멜리오다스", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20150324_209%2Fgus00008_1427190198870H3KoL_PNG%2F%25C0%25CF%25B0%25F6%25B0%25B3%25C0%25C7%25B4%25EB%25C1%25CB.png&type=sc960_832" },
    { name: "다이앤", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMTBfMjYx%2FMDAxNTIwNjkzODM5MDg4.EoK4cRT-lXmm7y4MPKJYZfyROhkQoXl0C1mh_5oBY0Ug.USrxqBHHJ0mlcl_8kzbDr3cq7hy_h6_B3pZJTiU2l0og.JPEG.dlftnqhrtn69%2Ftumblr_nswyuk1gLM1sfs938o5_1280.jpg&type=sc960_832" },
    { name: "킹", img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.namu.wiki%2Fi%2F7YMHFDo4yE-LzSiK0H9c3W3LAc_3jTw2wf_4RFC1Rl77JOgGER-64nxt8Igd6nyhTlhjolE4AjNWCpPG1mQIXg.webp&type=sc960_832" },
    { name: "반", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAxMDFfMTIz%2FMDAxNjA5NDczNDY2NzQ0.zBfN1ksOST08zavhTcbun-DOz_-itds5dQeukE6fJ8Ig.rGhOfKB-jGt7s6iW2HDUoeQq6RMEAXraGkiI65-I54Qg.JPEG.acorn26%2FKakaoTalk_20201229_113336311_05.jpg&type=sc960_832" },
    { name: "고서", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxOTA2MDNfNDMg%2FMDAxNTU5NTYxNDQ1MTg5.d3C99ZRh1GX8FiCkZGU1b2zkjd675uSsx6OXilTefYQg._K6T9IrtmAjq6OFtdFAUlP9b4SYOAIARPz3zwVGIB9Mg.JPEG%2FexternalFile.jpg&type=sc960_832" },
    { name: "멀린", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20150417_120%2Fjaya2560_1429251427296cN7In_JPEG%2FL_1561_20150311135813.jpg&type=sc960_832" },
    { name: "에스카노르", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5434%2F2020%2F01%2F03%2F0000027355_003_20200103163412272.jpg&type=sc960_832" },
    { name: "호크", img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.namu.wiki%2Fi%2Fo6sqEngBtjZMeQ9wBcRP9hqJuxSlOYzAEmf2RcghZDweUb3AH9a1bzeZYJFf0FaZMsCaVCgONQD2R46zJb5hyQ.webp&type=sc960_832" },
  ],
     "하이큐": [
    { name: "히나타 쇼요", img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcafe24.poxo.com%2Fec01%2Ffigurepresso89%2FIASPJm8td5sz7PeAytONQxxm4avO3jov2vP%2Ffl6VCm7OV2gQJ3CQsphOompVxudgYm2JUfzobZnbxIVtDKWskQ%3D%3D%2F_%2Fweb%2Fproduct%2Fbig%2F201610%2F3265_shop1_756033.jpg&type=sc960_832" },
    { name: "카게야마 토비오", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA5MTlfODIg%2FMDAxNTA1NzQ3Mjk1Mzc3.ijUTaFUjGYNu-nfmauzKx84ujEK6dDbmYIBsxoyVU7og.M1aiwavuURymU8dfbCkA3YmLWnhiFu3hVkgRyio88UAg.PNG.leeyounghun193%2F20170918_235301.png&type=sc960_832" },
    { name: "츠키시마 케이", img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcafe24.poxo.com%2Fec01%2Ffigurepresso89%2FIASPJm8td5sz7PeAytONQxxm4avO3jov2vP%2Ffl6VCm7OV2gQJ3CQsphOompVxudgYm2JUfzobZnbxIVtDKWskQ%3D%3D%2F_%2Fweb%2Fproduct%2Fbig%2F201610%2F3262_shop1_301164.jpg&type=sc960_832" },
    { name: "오이카와 토오루", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA3MDdfMjQx%2FMDAxNzIwMzMxNTU3NTMx.Z0f6dO42W5mzF4eTdZAAtihnyOhcdapJB6ANhYoQhUMg.pSp7258y_gT-aYGidinuTAYCnsxOmhdscOd1MYoXe58g.PNG%2FIMG_5228.png&type=sc960_832" },
  ],
       "도쿄구울": [
    { name: "카네키 켄", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20151129_141%2Flaneetv_1448793390746ycit0_PNG%2F%25C4%25AB%25B3%25D7%25C5%25B0_%25C4%25CB_%25BF%25F8%25BA%25BB.png&type=sc960_832" },
    { name: "카미시로 리제", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140704_116%2Fddxzzx_1404448737715HerMt_JPEG%2FTokyo_Ghoul_-_01_%2528MX_1280x720_x264_AAC%2529.mp4_20140704_132827.187.jpg&type=sc960_832" },
    { name: "키리시마 토우카", img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.namu.wiki%2Fi%2F07FMo2KIj4lMl76tYB__hW4M8GL4vtAF6abRnMAAKDvd_8Z5SDrDoHmi0mWoVN5sEOGYtz-dV2Ddn_v5D968GQ.webp&type=sc960_832" },
  ],
     "러브라이브!": [
    { name: "타카사키 유우", img: "https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20220719_191%2F1658221642278bWUl3_JPEG%2F60_main_image_new_1658221642264.jpg" },
    { name: "우에하라 아유무", img: "https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20220719_210%2F1658221864468w5yqe_JPEG%2F60_main_image_new_1658221864411.jpg" },
    { name: "나카스 카스미", img: "https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20220720_248%2F1658305443269AG7Fq_JPEG%2F60_main_image_new_1658305443209.jpg" },
    { name: "오사카 시즈쿠", img: "https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20220720_232%2F1658305710614inGIJ_JPEG%2F60_main_image_new_1658305710561.jpg" },
    { name: "아사카 카린", img: "https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20220720_214%2F16583060739386vdhV_JPEG%2F60_main_image_new_1658306073885.jpg" },
    { name: "미야시타 아이", img: "https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20220720_103%2F1658306429660LpKA7_JPEG%2F60_main_image_new_1658306429644.jpg" },
    { name: "코노에 카나타", img: "https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20220721_279%2F1658392277769ToiWO_JPEG%2F60_main_image_new_1658392277715.jpg" },
    { name: "유키 세츠나", img: "https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20220721_225%2F1658392588898KH3lC_JPEG%2F60_main_image_new_1658392588840.jpg" },
    { name: "엠마 베르데", img: "https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20220721_268%2F1658392879023I5i2c_JPEG%2F60_main_image_new_1658392879009.jpg" },
    { name: "텐노지 리나", img: "https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20220721_84%2F1658393474751eqbI5_JPEG%2F60_main_image_new_1658393474695.jpg" },
  ],
       "진격의 거인": [
    { name: "에렌 예거", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMTlfMTI5%2FMDAxNjQ3Njk1ODE3MjI0.heqCJ7yv_N2s7vqQpIDgzTIycLbO5bD7QbChXwThEPEg.rkRxxILJXqAkg5ZuRvZkiW_VjzrPTGc8GqvuMW9AvMog.JPEG.4868456%2FIMG_7126.JPG&type=sc960_832" },
    { name: "미카사 아커만", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20130414_269%2Fwjsdndcjs_1365940116569av2MD_PNG%2FK-53.png&type=sc960_832" },
    { name: "아르민 알레르토", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA3MjBfMTUw%2FMDAxNzIxNDUwMDE2NDgw.nu9IXaab8E8F4VhMWV1bYXrLuLr9zkdB42XJ7qHA-Eog.MvySWp8OGq-dmqqzwDiJgnJLmu6lPaTFIRel-zS8PMYg.JPEG%2F8_%25282%2529.jpg&type=sc960_832" },
    { name: "리바이 아커만", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA3MDlfMjU3%2FMDAxNzUxOTk5ODAzNzQy.he9kUjY7pFYsSkFtgCf-mrcuEdnbI1_30_VxkgPXZsIg.CbcFZI68ERM8pk-bcjkzGilz9CUCAjov4fxe3zpoFEQg.JPEG%2FIMG%25A3%25DF8472.JPG&type=sc960_832" },
  ],
     "안녕 자두야": [
    { name: "최자두", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA3MThfMTEx%2FMDAxNzUyODQ3OTQ2NTc4.MgspPUEGpFqsweMcgrnMl1qL6U9vVdm5T8VrO2E5AaAg.-PUTFn0b-8osoxiIx37V4BV_31jePl8X2ZqsV09aypkg.JPEG%2F%25B4%25D9%25BF%25EE%25B7%25CE%25B5%25E5%25C6%25C4%25C0%25CF%25A3%25DF20250718%25A3%25DF225626.jpg&type=sc960_832" },
    { name: "엄마", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEwMjlfMjYx%2FMDAxNjk4NTgwNDc1MTA3.16ptVKbuU8DgUqgmd38_f34L8LJN7tghfjiKU1WBrHgg._aC_7DgyNd1fPME6PP_joL7vjuuJdtoXTM2sA4NOKGsg.JPEG.wjd030513%2FIMG_0679.jpg&type=sc960_832" },
    { name: "아빠", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MDhfOTQg%2FMDAxNTk2ODc4NzgyNjg0.ySnhbh_1ZAz8PlLFiZLILMaRNEaNdIjeeuzGPx6uXxgg.Tt64r4wv0Nk1BM_3ZA9l-6d3U-GYpD60SQDpxTM5GQgg.JPEG.ehdgurn1%2F1596878781458.jpg&type=sc960_832" },
    { name: "미미", img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2Ffc%2F3f%2F4d%2Ffc3f4d0517939c92fbe43215a5f9ed05.jpg&type=sc960_832" },
    { name: "애기", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA5MDFfMTYx%2FMDAxNzU2NjU3NDcyMjcw.nRgEhfg4cmva0JAX6E6UnVdqaeV3OrW9FBANKkPHHZ4g.cysQKpb3x5FWusJSPzOsHnGJFKo-zfrnCR-7lEQhcCAg.JPEG%2FBF7C5805%25A3%25AD5F10%25A3%25AD4A25%25A3%25ADA685%25A3%25ADB5D88E20D394.jpg&type=sc960_832" },
  ],
       "캐릭캐릭체인지": [
    { name: "아무", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAyMjNfMjU0%2FMDAxNDg3ODE1MDUzOTgy.6JQBUu6tMi4zei463qTZV-g3biYHa6ln1NzfLesXkAEg.WtsPZHK1OyeBmyZHabDlbcY0ovHSLurF3WLpfizZelMg.JPEG.redvelvetholic%2Fd21f2928-96e6-4c5b-a625-f5d50b22cf31.jpeg.jpg&type=sc960_832" },
    { name: "토마", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAyMDA1MDlfMTA4%2FMDAxNTg4OTc0NjA5MjE1.gXmiZ4GHcZN003775OXAZBiebprkVP9uBiwOc64VLbIg.BLnZJdvZPgudaoayMun0SFWzPf1i9S1bIVcjyeE17Eog.JPEG%2FexternalFile.jpg&type=sc960_832" },
    { name: "세라", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA5MThfMjYg%2FMDAxNzI2NjYwMzc1NTU3.4nurToEh3uHLXhOs809yhWg5vLHyfSFL4Tc2fSNmyHMg.qL2XpBfK5DuPAbA9zLVmEMleP_Sn9g-b5-AVhtAzNYcg.JPEG%2F14.jpg&type=sc960_832" },
    { name: "루이", img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi1.sndcdn.com%2Fartworks-2n4nPEyk0PHcFc0j-HQNxKw-t500x500.jpg&type=sc960_832" },
  ],
     "데스노트": [
    { name: "야가미 라이토", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140206_28%2Fndmcrew_13916751610776OgaP_JPEG%2F%25BE%25DF%25B0%25A1%25B9%25CC_%25B6%25F3%25C0%25CC%25C5%25E4_4.JPG&type=sc960_832" },
    { name: "L", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160721_77%2Fasca0707_1469036548140TbUMT_JPEG%2F%25B8%25DA%25C1%25F6%25B4%25D9.jpg&type=sc960_832" },
    { name: "류크", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20130503_273%2Frhrlrhrl123_1367546216787JQPre_JPEG%2F%25B5%25A5%25BD%25BA3.jpg&type=sc960_832" },
  ],
       "개구리 중사 케로로": [
    { name: "케로로", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F45%2F32%2F60_714532_main_image_new_1489045227503.jpg" },
    { name: "타마마", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F73%2F09%2F32%2F60_730932_main_image_new_1488516426607.jpg" },
    { name: "기로로", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F45%2F34%2F60_714534_main_image_new_1488516531681.jpg" },
    { name: "쿠루루", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F73%2F09%2F31%2F60_730931_main_image_new_1488436900235.jpg" },
    { name: "도로로", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F45%2F36%2F60_714536_main_image_new_1488516577084.jpg" },
    { name: "강우주", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F45%2F37%2F60_714537_main_image_new_1488516476310.jpg" },
    { name: "강한별", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F45%2F38%2F60_714538_main_image_new_1488516464209.jpg" },
  ],
     "슈가슈가룬": [
    { name: "쇼콜라 메이율", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2Fdata24%2F2007%2F4%2F8%2F194%2F%25BD%25B4%25B0%25A1%25B7%25E9_%252871%2529_1.jpg&type=sc960_832" },
    { name: "바닐라 뮤", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMTlfMTEx%2FMDAxNzI5MzM4MDQ4Mjk5.covoEAAqXWK3GU0IRK9LVw4JFaVNrPpXpyPmy12ijREg._lTS2Zok6wkVr1X95eJoA8jFNU6zal2uT9hMLjRTlo0g.PNG%2Fimage.png&type=sc960_832" },
  ],
       "빛의 전사 프리큐어": [
    { name: "묵하람", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F44%2F45%2F60_714445_main_image_new_1489386586512.jpg" },
    { name: "큐어블랙", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F44%2F46%2F60_714446_main_image_new_1488949165687.jpg" },
    { name: "백시연", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F44%2F48%2F60_714448_main_image_new_1489386807029.jpg" },
    { name: "큐어화이트", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F44%2F49%2F60_714449_main_image_new_1488949192731.jpg" },
    { name: "메플", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F47%2F74%2F60_714774_main_image_new_1439187471338.jpg" },
    { name: "미플", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F47%2F75%2F60_714775_main_image_new_1439187460467.jpg" },
  ],
     "블리치": [
    { name: "쿠로사키 이치고", img: "https://search.pstatic.net/common?type=f&size=176x224&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F93%2F98%2F95%2F60_2939895_main_image_new_1441267717374.jpg" },
    { name: "이노후에 오리히메", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F93%2F98%2F98%2F60_2939898_main_image_new_1441268170795.jpg" },
    { name: "이시다 우류", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F93%2F99%2F42%2F60_2939942_main_image_new_1441269120445.jpg" },
    { name: "사도 야스토라", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F93%2F99%2F43%2F60_2939943_main_image_new_1441269489899.jpg" },
    { name: "콘", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F93%2F99%2F45%2F60_2939945_main_image_new_1441269724625.jpg" },
  ],
       "강철의 연금술사": [
    { name: "에드워드 엘릭", img: "https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F37%2F28%2F60_713728_main_image_new_1488871299632.jpg" },
    { name: "알폰스 엘릭", img: "https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F37%2F43%2F60_713743_main_image_new_1488866305829.jpg" },
    { name: "윈리 록벨", img: "https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F36%2F53%2F60_713653_main_image_new_1489050423283.jpg" },
  ],
     "학교괴담": [
    { name: "나해미", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA3MDFfMjIy%2FMDAxNzUxMzUyODY1MDk0.m-yKd47aD7ntibc27y05dgSKDgfYGobS7fL7DaZvL3sg.f-0BL7eVScClCQ5IdB0rPbiUe4uTYl7LyGJmBE4Jts4g.PNG%2F20250701_155325.png&type=a340" },
    { name: "나누리", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MTNfNjAg%2FMDAxNjI2MTcxMzMwNDkw.WM1Y3lJqkeDtbN-ZXVYgq6IKVGjeE8CK0H7Tvhrr_50g.7ug98ekV2GFhXV5XAgzNfkRBOAiiZ8REX3gy0jOa4Qgg.JPEG.tlsznwhdk%2F2021-07-13_19_15_19.jpg&type=sc960_832" },
    { name: "장영빈", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAzMzFfMTAy%2FMDAxNzExODUwNjA4NDE3.vnuDvgIJ6Oq5Trk9lSbgv1Jp6_Y1yyx1N5Sy9rhKadog.bzmk_LlUZec3_78x5eIC32NKLu0dSLFs8KkD5Uc0r-Qg.PNG%2F20240331_110310.png&type=sc960_832" },
    { name: "오경태", img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.namu.wiki%2Fi%2FWkzXYhOaq2We49kr7IeA3TARdSc2uEHGiQgzlbWg7iGikJsJMnuwjksOnXRkCZZl7kf4B5AgwC9musjld4MO3w.webp&type=sc960_832" },
    { name: "마리아", img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.namu.wiki%2Fi%2F6yU8JtUR0ycpnaySWshkiD41KJ1vkwOR1FQJ_8B6PKClhO8jDB5cKdVtoYQdbBLAhBZNOTTARkxzq1Wq0Pq0xw.webp&type=sc960_832" },
  ],
       "유희왕": [
    { name: "유희", img: "https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F45%2F51%2F60_714551_main_image_new_1489558507786.jpg" },
    { name: "어둠의 유희", img: "https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F45%2F52%2F60_714552_main_image_new_1446717265401.jpg" },
    { name: "조이", img: "https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F45%2F53%2F60_714553_main_image_new_1489558530545.jpg" },
  ],
     "이누야샤": [
    { name: "이누야샤", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzEwMDlfMjIg%2FMDAxNTA3NDgzMzU0NTM1.vTWabO2iNRVvGZeSFk56TNlczWlMAYm7PIzyoSLtj0Yg.U7NOWb73brgLQRThRcn73YB-0tLYFCsK0dEpPePPPwsg.JPEG.inucute0616%2FC0A93.JPG&type=sc960_832" },
    { name: "유가영", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20121228_46%2Folivia020177_13566725307478JOeg_JPEG%2F-1989187970.jpg&type=sc960_832" },
    { name: "금강", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20130920_266%2Fthd08gus12_1379682091843AQKkN_JPEG%2F-1135774306.jpg&type=sc960_832" },
    { name: "미륵", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMTZfNjEg%2FMDAxNjA1NDk0MjI3MzU1.yuWq_yqn9_Xt_dfFQN_o3rZ4qA794joaEITelOmw1p0g.wmqTAbSi-ldLsdNQA00XNcRfcq_GhZHL3ysc-UpMduog.PNG.gwgw3696%2F%25C8%25AD%25B8%25E9_%25C4%25B8%25C3%25B3_2020-11-16_113632_%25281%2529.png&type=sc960_832" },
    { name: "산고", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MDNfMjIg%2FMDAxNjgzMTAxOTU3NjE0.KKCJTyrgyF5SxpMesnckhWRpQgaBX8VbzcIMNw8bDdog.TjwDkBejULeogV0K5fYdO1bivWlVXzRJu8Rd-hnJaIYg.JPEG.tenma1004%2F031df889f7dc15a14d190628a4f83842.jpg&type=sc960_832" },
    { name: "셋쇼마루", img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fe0.pxfuel.com%2Fwallpapers%2F151%2F224%2Fdesktop-wallpaper-sesshomaru-inuyasha.jpg&type=sc960_832" },
    { name: "나락", img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2F3.gall-img.com%2Ftdgall%2Ffiles%2Fattach%2Fimages%2F82%2F178%2F683%2F058%2F2652e039c6cda533e191511fa6124418.jpg&type=sc960_832" },
  ],
       "헌터 X 헌터": [
    { name: "곤프릭스", img: "https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F94%2F45%2F00%2F60_2944500_main_image_new_1441422079211.jpg" },
    { name: "키르아 조르딕", img: "https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F94%2F45%2F01%2F60_2944501_main_image_new_1441422450333.jpg" },
    { name: "카이토", img: "https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F94%2F45%2F02%2F60_2944502_main_image_new_1441422814166.jpg" },
    { name: "레오리오", img: "https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F94%2F32%2F98%2F60_2943298_main_image_new_1441422993054.jpg" },
    { name: "크라피카", img: "https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F94%2F32%2F99%2F60_2943299_main_image_new_1441423244148.jpg" },
    { name: "히소카", img: "https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F94%2F45%2F08%2F60_2944508_main_image_new_1441423663896.jpg" },
  ],
     "디지몬 어드벤처": [
    { name: "최산해", img: "https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F69%2F84%2F60_716984_main_image_new_1438675055099.jpg" },
    { name: "홍예지", img: "https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F69%2F85%2F60_716985_main_image_new_1438675087132.jpg" },
    { name: "이재하", img: "https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F69%2F86%2F60_716986_main_image_new_1438675121372.jpg" },
    { name: "리키", img: "https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F69%2F87%2F60_716987_main_image_new_1438675154820.jpg" },
    { name: "신나리", img: "https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F69%2F88%2F60_716988_main_image_new_1438675183614.jpg" },
  ],

  "사이버펑크": [
    { name: "루시", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMDZfNzEg%2FMDAxNjY3NzQ2NDc2NzE2.jL-xVgxXyyelDTwGm325bNzGYPGlN_GWDzSnFLHLAGIg.zVQp6iURME_ALjTY3jdty41GsffPhraDqJeOuQk-nLMg.JPEG.li5238%2Flucy1.jpg%25A3%25DF976912859.jpg&type=sc960_832" },
    { name: "데이비드", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA2MDFfMTk1%2FMDAxNzQ4NzA0MTQ4MTY0.n49dBcnsrgQmxr8WVhGcHNoUPN9UNrndDqERiKSdMjcg.MuIw1jA4Jf_CaXqXScjOtaN-TCM2f5iqhbmyzXzCoDYg.PNG%2F%25BD%25BA%25C5%25A9%25B8%25B0%25BC%25A6_2025-06-01_%25BF%25C0%25C0%25FC_12.07.05.png&type=sc960_832" },
  ],

  //인지

  //1980년대
  "드래곤볼": [
    { name: "손오공", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F52%2F49%2F60_715249_main_image_new_1438244439032.jpg" },
    { name: "부르마", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F52%2F50%2F60_715250_main_image_new_1438244428601.jpg" },
    { name: "크리링", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F52%2F52%2F60_715252_main_image_new_1438244404859.jpg" },
    { name: "무천도사", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F52%2F51%2F60_715251_main_image_new_1438244418486.jpg" },
    { name: "피라프", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F52%2F54%2F60_715254_main_image_new_1438244384460.jpg" }
  ],

  "플란다스의 개": [
    { name: "네로", img: "https://i.pinimg.com/1200x/67/71/29/677129d55eae92c3be40153a515554f9.jpg"},
    { name: "아로아", img: "https://i.pinimg.com/1200x/d4/9c/b3/d49cb39946600125ef9c234f9cb01296.jpg"},
    { name: "파트라슈", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxOTA4MTZfMjA2%2FMDAxNTY1ODgxOTQzOTQ0.ng1PLWdhIm6gtxKBvMIkCn384yL3OLoYaiUcroo7g8Ig.147cH8dyqyvHTvsOfn1XWynLb_6l5QeG7t3kh6467Ykg.PNG%2FexternalFile.png&type=sc960_832"}
  ],

   "캔디 캔디": [
    { name: "캔디", img: "https://i.pinimg.com/1200x/39/8b/e1/398be153be87f42413b18c3004bd2203.jpg"},
    { name: "앤서니", img: "https://i.pinimg.com/736x/3f/d6/fb/3fd6fb28bdd4729f6567e55c5b899242.jpg"},
    { name: "알버트", img: "https://i.pinimg.com/1200x/1a/b7/85/1ab785ee82e213bb0950c98d35d43077.jpg"},
    { name: "테리우스", img: "https://i.pinimg.com/736x/ee/fa/9c/eefa9c3c6f1f917d2bce77d523562664.jpg"},
    { name: "패티", img: "https://i.pinimg.com/736x/20/f6/af/20f6af611e353e9c2f0ce54a3d6ba8a1.jpg"},
  ],

   "은하철도999": [
    { name: "메텔", img: "https://i.pinimg.com/736x/dc/fa/1f/dcfa1fbdc06f46cd9c10813ae49874ba.jpg"},
    { name: "철이", img: "https://i.pinimg.com/736x/e5/2f/c8/e52fc82f85bab5402fa656afebcf28f3.jpg"},
    { name: "차장", img: "https://i.pinimg.com/1200x/21/9a/49/219a49de697d10171ac4676bbf20eb43.jpg"},
  ],

   "패트와 매트": [
    { name: "패트", img: "https://i.pinimg.com/1200x/1e/cd/30/1ecd3033a5c1b9f2a22967ef1940f16d.jpg"},
    { name: "매트", img: "https://i.pinimg.com/1200x/dd/75/6d/dd756d308e0ee89a3d1145c1f1024db7.jpg"},
  ],

   "도라에몽": [
  { name: "도라에몽", img:"https://i.pinimg.com/736x/0f/1e/75/0f1e7530c5be39c6432fd71cce8b0196.jpg" },
  { name: "도라미", img:"https://i.pinimg.com/1200x/47/19/9a/47199ad41b42ba3a6f010bab4f70700a.jpg" },
  { name: "노진구", img:"https://i.pinimg.com/736x/0f/a3/a0/0fa3a047a15426dccd8a44a2c4bf14f7.jpg" },
  { name: "퉁퉁이", img:"https://i.pinimg.com/736x/07/77/cf/0777cf958aebecaa2cb96f37757469d2.jpg" },
  { name: "비실이", img:"https://i.pinimg.com/736x/c3/e2/ff/c3e2ffd8ea425d24e55d5c218bdd5d1e.jpg" },
  { name: "이슬이", img:"https://i.pinimg.com/736x/c0/ce/2d/c0ce2d3e3488018465574ff4b0e968ef.jpg" },
  ],

  "기동전사 건담": [
  { name: "레이", img:"https://i.pinimg.com/1200x/e4/3b/0c/e43b0c11daa55cffd800360d4efc2a10.jpg" },
  { name: "건담", img:"https://i.pinimg.com/736x/e9/67/47/e96747754d1da44b1c963a22ab7a1ec9.jpg" },
  { name: "샤아", img:"https://i.pinimg.com/736x/e0/2a/2f/e02a2f7adb53f08df46c85a4c4c7200f.jpg" },
  { name: "자쿠", img:"https://i.pinimg.com/1200x/e8/c8/0a/e8c80adb0b925cee08fe6e244e17d102.jpg" },
  ],

   "토마스와 친구들": [
  { name: "토마스", img:"https://i.pinimg.com/736x/db/1c/d2/db1cd24db6a1a9169bdf3b882065ce86.jpg" },
  { name: "퍼시", img:"https://i.pinimg.com/1200x/9f/71/ac/9f71ac718d5b49897f27acacd9108fb0.jpg" },
  { name: "찰리", img:"https://i.pinimg.com/1200x/91/d3/66/91d366e51fc2bb851cf80022646538f2.jpg" },
  ],

   "아기공룡 둘리": [
  { name: "둘리", img:"https://i.pinimg.com/1200x/4d/e2/ed/4de2ed5540cd6e0e3c7298a3d8411400.jpg" },
  { name: "또치", img:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA1MjFfMjY5%2FMDAxNzE2MjY5NTQzNjMz.bcDBtlS_rRdZCWCkFAwlILGWpr4s_AGrGPIt4_tHkTsg.Oow6FnfLFPis3gEcsMqKXFlM0dfjKbG4GXuEr_TlZ7Mg.JPEG%2Foutput_2016026816.jpg&type=sc960_832" },
  { name: "도우너", img:"https://search.pstatic.net/sunny/?src=https%3A%2F%2Fyt3.googleusercontent.com%2Fytc%2FAIdro_nqTEKraLWCjCrUN-AhKdInpgcc98Dk7iJgzloRHbvOnw%3Ds900-c-k-c0x00ffffff-no-rj&type=sc960_832" },
  { name: "희동이", img:"https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F47%2F28%2F60_714728_main_image_new_1488784133164.jpg" },
  { name: "고길동", img:"https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F47%2F30%2F60_714730_main_image_new_1488874570514.jpg"}
  ],

   "시티헌터": [
  { name: "료", img:"https://i.pinimg.com/736x/27/ef/93/27ef933459c973dd86b486fa8cd77287.jpg" },
  { name: "카오리", img:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FplwHb%2FbtrGSU6V8hz%2FAAAAAAAAAAAAAAAAAAAAABDk4a67XBnBPk2Ouiek_HdNagZSM4fm4Fxggg8QGCrb%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3D%252Fwu2qQ6swEILTn9LVy%252BdwZNdFAY%253D" },
  { name: "히데유키", img:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FcgXLpn%2FbtrG1zVgbBv%2FAAAAAAAAAAAAAAAAAAAAANVz_pos2Dz5Qt4PiE9EPEns7zUCHc4LAnRvMQy4oT3q%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3DwcV7TlcZuT6qKnyQzzVKMDd%252Ftw4%253D" },
  { name: "우미보즈", img:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FY6Gwj%2FbtrG2sO5G5F%2FAAAAAAAAAAAAAAAAAAAAAJJdTLGqp9SVFQraxhq8mRBYGNPFQ6hQXzQmdEsASQsi%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3Dlz3jw2Pb5HiMTwkXDSEKP2lLDPA%253D" },
  { name: "사에코", img:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FSChmO%2FbtrG4fVvaNs%2FAAAAAAAAAAAAAAAAAAAAACnsRSBfXH2N3OAe6JzBBmsJmGSLiluSBksI5FW6dP1A%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3DrNwBL7KMeZ%252B0BDWnfMoQn0A%252BbtM%253D" },
  ],

  //1990년대
   "머털도사": [
  { name: "머털", img:"https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F72%2F63%2F08%2F60_726308_main_image_new_1489041704427.jpg" },
  { name: "누덕도사", img:"https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F72%2F63%2F09%2F60_726309_main_image_new_1488952992016.jpg" },
  { name: "묘선", img:"https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F72%2F63%2F10%2F60_726310_main_image_new_1489041740649.jpg" },
  { name: "떠리", img:"https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F72%2F63%2F11%2F60_726311_main_image_new_1488700191248.jpg" },
  { name: "왕질악도사", img:"https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F72%2F63%2F12%2F60_726312_main_image_new_1489041847849.jpg" },
  ],

   "명탐정 코난": [
  { name: "코난", img:"https://i.pinimg.com/1200x/9f/51/a2/9f51a22f68ff3273fd72bdb07712c39d.jpg" },
  { name: "장미", img:"https://i.pinimg.com/736x/a5/b3/66/a5b366118b356047c59cf598cb02434c.jpg" },
  { name: "유미란", img:"https://i.pinimg.com/736x/1b/24/66/1b2466d42a6d2c05dd303fe21cee82ea.jpg" },
  { name: "유명한", img:"https://i.pinimg.com/1200x/5c/d3/64/5cd364b474602a348bf2b55fd7360607.jpg" },
  { name: "괴도키드", img:"https://i.pinimg.com/1200x/31/dc/31/31dc31bed3f1e2a762d25fcbd2acf681.jpg" },
  ],

   "짱구는 못말려": [
  { name: "짱구", img:"https://i.pinimg.com/736x/df/9c/22/df9c227dc906adb8c84b8b97676edccc.jpg" },
  { name: "철수", img:"https://i.pinimg.com/736x/06/07/3a/06073ab83ddef862bf663101f8471883.jpg" },
  { name: "맹구", img:"https://i.pinimg.com/736x/20/4a/96/204a969720c36aaea1622ae428adb68e.jpg" },
  { name: "유리", img:"https://i.pinimg.com/736x/73/b0/7c/73b07cecf01df0453ca29047d9069856.jpg" },
  { name: "훈이", img:"https://i.pinimg.com/736x/11/ff/a7/11ffa7037b6670ff1ac377584d79063f.jpg" },
  ],

   "세일러문": [
  { name: "우사기", img:"https://i.pinimg.com/1200x/d9/f7/5e/d9f75e22b98b8028eb9321f5a18a5e96.jpg" },
  { name: "아미", img:"https://i.pinimg.com/736x/34/ff/56/34ff56f973b5dff52fb28c8d08bc6221.jpg" },
  { name: "레이", img:"https://i.pinimg.com/736x/70/21/44/702144785bbe899d8e7954555d158605.jpg" },
  { name: "마코토", img:"https://i.pinimg.com/736x/f3/01/1b/f3011b45333a4090915bfec1d249b49f.jpg" },
  { name: "미나코", img:"https://i.pinimg.com/1200x/5f/03/d8/5f03d8eac6a18d5562dd4a22a719c16e.jpg" },
  ],

   "슬램덩크": [
  { name: "강백호", img:"https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F47%2F09%2F60_714709_main_image_new_1445503075151.jpg" },
  { name: "채치수", img:"https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F47%2F10%2F60_714710_main_image_new_1445503057775.jpg" },
  { name: "서태웅", img:"https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F47%2F11%2F60_714711_main_image_new_1445503042050.jpg" },
  { name: "정대만", img:"https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F47%2F12%2F60_714712_main_image_new_1445503024832.jpg" },
  { name: "송태섭", img:"https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F47%2F13%2F60_714713_main_image_new_1445503008181.jpg" },
  ],

  "신세기 에반게리온": [
  { name: "신지", img:"https://i.pinimg.com/736x/66/4f/8e/664f8ea93e796c0916877a97898c2b4d.jpg" },
  { name: "아스카", img:"https://i.pinimg.com/736x/37/d2/1b/37d21bb9fbd13a1d47c3221debc96c38.jpg" },
  { name: "레이", img:"https://i.pinimg.com/736x/f1/ac/0b/f1ac0b0b13586d45cbb8f607e4cedda3.jpg" },
  { name: "미사토", img:"https://i.pinimg.com/1200x/31/69/dc/3169dc7e0fd30f560c83156953f021b1.jpg" },
  ],


   "포켓몬스터": [
  { name: "지우", img:"https://i.pinimg.com/736x/22/40/b8/2240b85ef4cc4e5d9d5fecd51aba8a98.jpg" },
  { name: "피카츄", img:"https://i.pinimg.com/736x/7c/da/f3/7cdaf39724851fa38a078ab207c3a1af.jpg" },
  { name: "오박사", img:"https://i.pinimg.com/736x/a8/39/01/a839018c39de59d0cb6b9eb63efbbf41.jpg" },
  { name: "로켓단", img:"https://i.pinimg.com/1200x/95/70/e9/9570e99011798a02d4b75b4053bcf747.jpg" },
  ],

  "원피스": [
  { name: "루피", img:"https://i.pinimg.com/1200x/98/1a/07/981a07c3ed840b5961b5dab0bf19157e.jpg" },
  { name: "조로", img:"https://i.pinimg.com/736x/33/c1/05/33c105d7dc4a7560579de2a12c675851.jpg" },
  { name: "나미", img:"https://i.pinimg.com/1200x/7d/38/23/7d3823c522f2dc44e014d62ed067ab8c.jpg" },
  { name: "우솝", img:"https://i.pinimg.com/1200x/a5/02/e0/a502e0f4f05b289f837da1391e38ed16.jpg" },
  { name: "상디", img:"https://i.pinimg.com/736x/16/07/f7/1607f77ab59fd1a5c5df1da2b668c41e.jpg" },
  ],

  "카드캡터체리": [
  { name: "유체리", img:"https://i.pinimg.com/736x/3c/d5/f7/3cd5f76bd0cce077e3b4386a7b77c8e3.jpg" },
  { name: "신지수", img:"https://i.pinimg.com/736x/44/ff/ce/44ffce880606db2118c9773628ff097e.jpg" },
  { name: "샤오랑", img:"https://i.pinimg.com/1200x/aa/e9/c6/aae9c64d6cc36f7fbd9c1acca4ccf7bd.jpg" },
  { name: "케로", img:"https://i.pinimg.com/1200x/55/c8/e0/55c8e0a0677626eee903f287afe310cd.jpg" },
  ],
};
  




/* ------------------------
   모달 열기
------------------------- */
document.querySelectorAll(".anime-card").forEach(card => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img");

    modalTitle.textContent = card.dataset.title;
    modalYear.textContent = `방영년도: ${card.dataset.year}`;
    modalDesc.textContent = card.dataset.desc;
    modalImg.src = img.src;

    /* --- 등장인물 표시 --- */
    const list = document.getElementById("character-list");
    list.innerHTML = "";

    const charData = characters[card.dataset.title];
    if (charData) {
      charData.forEach(ch => {
        const div = document.createElement("div");
        div.classList.add("character-card");
        div.innerHTML = `
          <img src="${ch.img}">
          <p class="character-name">${ch.name}</p>
        `;
        list.appendChild(div);
      });
    }

    enableDragScroll(list);

  

    // 랜덤으로 열렸을 때만 버튼 표시
    rerollBtn.style.display = openedByRandom ? "block" : "none";

    modal.style.display = "block";
  });
});


/* ------------------------
   모달 닫기
------------------------- */
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  openedByRandom = false;
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
    openedByRandom = false;
  }
});


/* ------------------------
   "랜덤 추천" 버튼
------------------------- */
randomBtn.addEventListener("click", () => {
  const cards = [...document.querySelectorAll(".anime-card")];
  const randomCard = cards[Math.floor(Math.random() * cards.length)];

  openedByRandom = true;
  randomCard.click();

  dropdown.style.display = "none";
});


/* ------------------------
   "다시 뽑기" 버튼
------------------------- */
rerollBtn.addEventListener("click", () => {
  const cards = [...document.querySelectorAll(".anime-card")];
  const randomCard = cards[Math.floor(Math.random() * cards.length)];

  openedByRandom = true;
  randomCard.click();
});


/* ------------------------
   메뉴 열기 / 닫기
------------------------- */
menuBtn.addEventListener("click", () => {
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => {
  if (!menuBtn.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.style.display = "none";
  }
});


/* ------------------------
   등장인물 드래그 스크롤
------------------------- */
function enableDragScroll(list) {
  let isDown = false;
  let startX, scrollLeft;

  list.addEventListener("mousedown", e => {
    isDown = true;
    startX = e.pageX - list.offsetLeft;
    scrollLeft = list.scrollLeft;
  });

  list.addEventListener("mouseup", () => isDown = false);

  list.addEventListener("mousemove", e => {
    if (!isDown) return;
    const x = e.pageX - list.offsetLeft;
    list.scrollLeft = scrollLeft - (x - startX) * 1.3;
  });
}


/* ------------------------
   애니 목록 가로 드래그 슬라이드
------------------------- */
document.querySelectorAll(".anime-list").forEach(list => {
  enableAnimeSlide(list);
});

function enableAnimeSlide(container) {
  let isDown = false;
  let startX;
  let scrollLeft;
  let moved = false;

  container.addEventListener("mousedown", (e) => {
    isDown = true;
    moved = false;
    container.classList.add("dragging");
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDown) return;

    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX);

    if (Math.abs(walk) > 5) {
      moved = true;
      container.scrollLeft = scrollLeft - walk;
      container.style.pointerEvents = "none";
      e.preventDefault();
    }
  });

  function stopDrag() {
    if (isDown) {
      setTimeout(() => {
        container.style.pointerEvents = "";
      }, 30);
    }

    isDown = false;
    container.classList.remove("dragging");
  }

  container.addEventListener("mouseleave", stopDrag);
  container.addEventListener("mouseup", stopDrag);
  window.addEventListener("mouseup", stopDrag);

  container.addEventListener("click", (e) => {
    if (moved) {
      e.preventDefault();
      moved = false;
      return;
    }
  });
}


