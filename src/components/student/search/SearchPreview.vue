<template>
  <TheNave />
  <div class="search-preview pb-3 pt-5">
    <TheLoading />
    <div class="container-fluid">
      <!-- Profile Data -->
      <div class="profile-data mb-5 col-11 col-lg-7 mx-auto">
        <div class="the-img text-center">
          <img src="https://e.top4top.io/p_2363fihh21.jpg" alt="" style="
              width: 200px;
              height: 200px;
              border-radius: 50%;
              margin-bottom: 30px;
            " @click="showImg" />
        </div>
        <div class="the-data">
          <p class="user-name text-center" style="
              font-size: 28px;
              font-weight: 900;
              text-transform: capitalize;
              color: white;
            "></p>
          <p class="user-email text-center" style="font-size: 28px; font-weight: 900; color: white"></p>
        </div>
        <div class="follow text-center pt-3">
          <button v-if="followingModule.isFollowed" class="follow-btn followed" style="
              background-color: #2a497d;
              color: white;
              transition: 0.3s all ease-in-out;
              margin-top: 10px;
              padding: 8px 30px;
              border-radius: 10px;
              border-color: #2a497d;
              font-size: 25px;
              font-weight: 900;
              transition: 0.3s;
            " @click="followUser">
            Unfollow
          </button>
          <button v-else class="'follow-btn'" style="
              background-color: #047f77;
              color: white;
              transition: 0.3s all ease-in-out;
              margin-top: 10px;
              padding: 8px 30px;
              border-radius: 10px;
              border-color: #2a497d;
              font-size: 25px;
              font-weight: 900;
              transition: 0.3s;
            " @click="followUser">
            follow
          </button>
        </div>
      </div>
      <!-- End Profile Data -->
      <div class="row">
        <div class="col-12 col-sm-8 pr-sm-2">
          <div class="add-exam-div">
            <div class="title">
              <h3 class="text-center py-3">Open Exams</h3>

            </div>
            <div class="exams px-3">
              <div class="empty-exam" style="  position: absolute;
                              top: 52%;
                             left: 50%;
                          transform: translate(-50%, -50%);
                          width: 100%;" v-if="!getAllExams.length">
                <p class="nnn" style="font-style: italic;
                  text-align: center;
                  font-size: 28px;
                  color: #650089c9;
                  font-weight: 500;
                  background-color: white;">There is no Exams open now !</p>
              </div>
              <div class="row">
                <div class="col-6 col-sm-4 col-lg-3 mb-2 exam-dad" v-for="(exam, index) in getAllExams" :key="index">
                  <div class="exam card pb-4 position-relative" style="width: 15rem;">
                    <img
                      src="../../../assets/quiz.jpg"
                      class="exam-img-top" alt="..." @click="openExam(
                          exam.instructorUserId,
                          allUserInfo.userId,
                          exam._id,
                          exam
                        )
                        " style="cursor: pointer" />
                    <div class="exam-body card-body" style="background-color: white;padding-left: 10px!important;
                              padding-right: 10px!important;
                              padding-top: 10px!important;
                              padding-bottom: 10px!important;
                              text-align: center;
                              display: flex;
                              font-size:small;
                                                        flex-direction: column;
                              justify-content: center;
                              align-items: center;">
                      <h5 class="exam-title card-title">
                        {{ exam.title }}
                      </h5>
                      <p class="exam-date">
                        {{ exam.startDate }}
                      </p>
                      <p class="exam-start-time">
                        Start: {{ exam.startTimeAt.slice(0, 5) }}
                      </p>
                      <p class="exam-end-time">
                        End: {{ exam.endTimeAt.slice(0, 5) }}
                      </p>
                      <p class="exam-status" :style="exam.status == 'Pending'
                        ? 'color: orange'
                        : exam.status == 'Closed'
                          ? 'color: indianred'
                          : 'color: #46b846'
                        ">
                        {{ exam.status }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-4 pl-sm-2 mt-3 mt-sm-0">
          <div class="add-url-div">
            <div class="title py-3">
              <h3 class="text-center">URLs</h3>
            </div>
            <div class="urls">
              <div class="empty-urls" v-if="!instrucHome.urls">
                <p class="mmm">There is no URLs available yet !</p>
              </div>
              <ul class="list-unstyled pt-3" v-else>
                <li v-for="(myLink, index) in instrucHome.urls" :key="index">
                  <a :href="myLink.link">{{ myLink.desc }}</a>
                  <button class="save-link-btn" @click="saveUrl(myLink)">
                    Save
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="result-popup">
      <div class="body">
        <p class="alert">You have already completed this exam</p>
        <table class="table-control w-100 mb-4">
          <thead>
            <tr>
              <th>Exam Degree</th>
              <th>Result Degree</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="total">{{ examTotal }}</td>
              <td class="result">{{ stResult }}</td>
              <td class="percentage">{{ resPercent }}</td>
            </tr>
          </tbody>
        </table>
        <div class="result-btns">
          <button class="cancel" @click="closeResultPop">Close</button>
        </div>
      </div>
    </div>
    <div class="show-prof-img">
      <span style="
          color: white;
          position: absolute;
          font-size: 25px;
          top: 40px;
          left: 40px;
          cursor: pointer;
        " @click="closePhoto">X</span>
      <div class="img-feild"></div>
    </div>
  </div>
</template>

<script>
import TheNave from "@/components/global/thenav/TheNav.vue";
import { mapActions, mapState } from "vuex";
import TheLoading from "@/components/global/loading/TheLoading.vue";

export default {
  name: "SearchPreview",
  components: {
    TheNave,
    TheLoading,
  },
  data() {
    return {
      getAllExams: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      photo: "",
      userId: "",
      infoUpdated: false,
      profileImage: "",
      examTotal: "",
      stResult: "",
      resPercent: "",
    };
  },
  computed: {
    ...mapState([
      "instrucHome",
      "followingModule",
      "navbarModule",
      "allUserInfo",
      "instrucHome",
    ]),
  },
  methods: {
    ...mapActions([
      "doGetUrls",
      "doCheckFollowed",
      "doFollow",
      "doUnfollow",
      "doGetSearchedExams",
      "doCheckUrls",
      "doCheckAuth",
      "doGetExams",
      "checkIfExamed",
      "doCheckExam",
    ]),
    showAlert(icn, msg, btnTxt, showCancel = false, cancelTxt = "") {
      this.$swal({
        title: msg,
        icon: icn,
        confirmButtonText: btnTxt,
        cancelButtonText: cancelTxt,
        confirmButtonColor: "#197278",
        cancelButtonColor: "#dc3545",
        showCancelButton: showCancel,
        showCloseButton: true,
      });
    },
    closeResultPop() {
      document.querySelector(".search-preview .result-popup").style.display =
        "none";
    },
    closePhoto(e) {
      e.target.parentElement.style.display = "none";
    },
    async doGetSerachData(_id) {
      const checkAuth = await this.doCheckAuth(this.$store.state.apiLink);
      if (!checkAuth) {
        this.$router.push("/signin");
      } else {
        await fetch(`${this.$store.state.apiLink}/users/profile/${_id}`)
          .then((res) => res.json())
          .then((data) => {
            this.firstName = data.firstName;
            this.lastName = data.lastName;
            this.profileImage = data.profileImg;
            let userImg = data.profileImg;
            let userName = `${data.firstName} ${data.lastName}`;
            let userEmail = data.email;
            document.querySelector(".search-preview .user-name").innerText =
              userName;
            if (userImg != "") {
              document
                .querySelector(".search-preview .the-img img")
                .setAttribute("src", userImg);
            }
            document.querySelector(".search-preview .user-email").innerText =
              userEmail;
          });
      }
    },
    showImg(e) {
      document.querySelector(
        ".search-preview .show-prof-img .img-feild"
      ).style.backgroundImage = `url(
          ${e.target.getAttribute("src")}
        )`;
      document.querySelector(".search-preview .show-prof-img").style.display =
        "block";
    },
    async followUser() {
      const checkAuth = await this.doCheckAuth(this.$store.state.apiLink);
      if (!checkAuth) {
        this.$router.push("/signin");
      } else {
        if (
          !document
            .querySelector(".search-preview .profile-data button")
            .classList.contains("followed")
        ) {
          document.querySelector(
            ".search-preview .profile-data button"
          ).style.pointerEvents = "none";
          const payload = {
            instructorId: this.$route.params.id,
            studentId: checkAuth._id,
            isRead: false,
            firstName: this.allUserInfo.firstName,
            lastName: this.allUserInfo.lastName,
            profileImg: this.allUserInfo.photo,
            message: "started following you",
            gradeNo: this.allUserInfo.gradeNo,
            sectionNo: this.allUserInfo.sectionNo,
          };
          await this.doFollow(payload);
          await this.doCheckFollowed(payload);
          document.querySelector(
            ".search-preview .profile-data button"
          ).style.pointerEvents = "unset";
          //End Do Unfollow
        } else {
          document.querySelector(
            ".search-preview .profile-data button"
          ).style.pointerEvents = "none";
          const payload = {
            instructorId: this.$route.params.id,
            studentId: checkAuth._id,
          };
          await this.doUnfollow(payload);
          await this.doCheckFollowed(payload);
          document.querySelector(
            ".search-preview .profile-data button"
          ).style.pointerEvents = "unset";
          //End Do Follow
        }
      }
    },
    async saveUrl(linkData) {
      const checkAuth = await this.doCheckAuth(this.$store.state.apiLink);
      if (!checkAuth) {
        this.$router.push("/signin");
      } else {
        let payload = {
          urls: [linkData],
          studentId: checkAuth._id,
          instructorId: this.$route.params.id,
          firstName: this.firstName,
          lastName: this.lastName,
          profileImg: this.profileImage,
        };
        await this.doCheckUrls(payload);
        this.showAlert(
          "success",
          "The URL has been saved to your homepage URLS",
          "Close"
        );
      }
    },
    async openExam(instId, stId, examId, examData) {
      const checkAuth = await this.doCheckAuth(this.$store.state.apiLink);
      if (!checkAuth) {
        this.$router.push("/signin");
      } else {
        document.querySelector(".loading").style.cssText = `
        opacity: 0.7; visibility: visible
      `;
        const payload = {
          instId: instId,
          stId: stId,
          examId: examId,
        };
        let checkExam = await this.checkIfExamed(payload);

        // If New Exam Not shared
        if (!checkExam) {
          setTimeout(async () => {
            document.querySelector(".loading").style.cssText = `
              opacity: 0; visibility: hidden
            `;
            //
            const exam = examData;
            exam.examId = examData._id;
            exam.isExamed = false;
            exam.result = null;
            const toShareExam = {
              studentId: this.allUserInfo.userId,
              instructorId: examData.instructorUserId,
              firstName: this.firstName,
              lastName: this.lastName,
              profileImg: this.profileImage,
              exams: [exam],
            };
            await this.doCheckExam(toShareExam);

            localStorage.setItem("exam-available", "true");
            this.$router.push(`/start-exam/${instId}/${stId}/${examId}`);
          }, 1000);
        } else {
          if (checkExam.isExamed == false) {
            setTimeout(() => {
              document.querySelector(".loading").style.cssText = `
                  opacity: 0; visibility: hidden
                `;
              localStorage.setItem("exam-available", "true");
              this.$router.push(`/start-exam/${instId}/${stId}/${examId}`);
            }, 1000);
          } else {
            setTimeout(() => {
              document.querySelector(".loading").style.cssText = `
                opacity: 0; visibility: hidden
              `;
              //
              document.querySelector(
                ".search-preview .result-popup .body p"
              ).innerText = "You have already completed this exam";
              document.querySelector(
                ".search-preview .result-popup .body p"
              ).classList = "alert alert-success";
              setTimeout(() => {
                document.querySelector(
                  ".search-preview .loading"
                ).style.cssText = `
                opacity: 0; visibility: hidden
              `;
                this.examTotal = checkExam.totalDegree;
                this.stResult = checkExam.result;
                this.resPercent =
                  (
                    (parseInt(checkExam.result) * 100) /
                    parseInt(checkExam.totalDegree)
                  ).toFixed(2) + "%";
                setTimeout(() => {
                  document.querySelector(
                    ".search-preview .result-popup"
                  ).style.display = "flex";
                }, 100);
              }, 500);
              //
            }, 500);
          }
        }
      }
    },
  },
  async mounted() {
    this.getAllExams = "";
    document.querySelector(".the-nav .search form").style.display = "none";
    const checkAuth = await this.doCheckAuth(this.$store.state.apiLink);
    if (!checkAuth) {
      this.$router.push("/signin");
    } else {
      //Get Urls
      //Get SearchUSer Data
      await this.doGetSerachData(this.$route.params.id);
      const payload = {
        instructorId: this.$route.params.id,
        studentId: checkAuth._id,
      };
      await this.doCheckFollowed(payload);
      await this.doGetExams(this.$route.params.id);
      this.getAllExams = this.instrucHome.allExams.filter((el) => {
        return el.grade == this.allUserInfo.gradeNo && el.status == "Open";
      });
      await this.doGetUrls(this.$route.params.id);
      document.querySelector(".search-preview .loading").style.cssText = `
        opacity: 0; visibility: hidden
      `;
    }
    //End Follow And Unfollow
  },
};
</script>

<style lang="scss">
@import "../../../assets/sass/main";

.search-preview {
  .profile-data {
    background-image: url("../../../assets/6107199.jpg");
    background-size: cover;
    margin: auto;
    padding: 30px 0;
    border-radius: $bRadius;
    opacity: 0.95;

    button {
      border-radius: $bRadius;

      &.followed {
        background-color: white !important;
        color: black !important;
        border-radius: $bRadius;
      }
    }

    .the-img img {
      cursor: pointer;
      object-fit: cover;
    }
  }

  a {
    text-decoration: none !important;
    color: unset !important;
  }

  .add-exam-div {
    position: relative;
    height: 75vh;
    box-shadow: 0px 0px 5px -2px black;
    background-image: url("../../../assets/books-7431944_960_720.jpg");
    background-size: cover;
    border-radius: $bRadius;
    overflow: hidden;
    margin-top: 30px;
    width: 97%;
    margin-left: auto;
    margin-right: auto;

    .title h3 {
      font-size: 30px;
      font-weight: 900;
      background-color: $mainColor;
      color: $titleColor;
    }

    .exam {
      height: 50%;
      box-shadow: 0px 2px 6px -5px black;
      position: relative;
  
      .empty-exam {
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;

        .empty-exam.nnn {
          font-style: italic;
          text-align: center;
          font-size: 28px;
          color: #650089c9;
          font-weight: 500;
          background-color: white;
        }
      }

      .exam {
        border-radius: 7px !important;
        width: 100% !important;
        overflow: hidden;
        margin-bottom: 10px;

        img {
          height: 140px;
          width: 100%;
          object-fit: cover;
        }

        .exam-body {
          padding-left: 10px !important;
          padding-right: 10px !important;
          padding-top: 10px !important;
          padding-bottom: 10px !important;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .exam-title {
            font-size: 14px !important;
            font-weight: 500 !important;
            margin-bottom: 5px;
          }

          .exam-date {
            font-size: 10px !important;
            font-weight: 500 !important;
            color: indianred;
            margin-bottom: 3px;
          }

          .exam-start-time {
            font-size: 10px !important;
            font-weight: 500 !important;
            color: blue;
            margin-bottom: 3px;
          }

          .exam-end-time {
            font-size: 10px !important;
            font-weight: 500 !important;
            color: indianred;
            margin-bottom: 3px;
          }

          .exam-status {
            font-size: 10px;
            font-weight: 700;
            margin-bottom: 0;
            margin-top: 3px;
            border-radius: 4px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: -webkit-fit-content;
            width: -moz-fit-content;
            width: fit-content;
            color: #46b846;
            letter-spacing: 1px;
          }
        }
      }
    }
  }

  .add-url-div {
    height: 75vh;
    box-shadow: 0px 0px 5px -2px black;
    background-image: url("../../../assets/books-7431944_960_720.jpg");
    background-size: cover;
    border-radius: $bRadius;
    overflow: hidden;
    margin-top: 30px;
    width: 97%;
    margin-left: auto;
    margin-right: auto;
    position: relative;

    .title {
      background-color: #fd6ee079;

      h3 {
        font-size: 30px;
        font-weight: 900;
        color: $titleColor;
      }
    }

    .urls {
      height: 89%;
      overflow-y: auto;
      overflow-x: hidden;
      box-shadow: 0px 2px 6px -5px black;
      position: relative;
      background-image: url("../../../assets/glasses-5868861_960_720.jpg");
    background-size: cover;
      .empty-urls {
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;

        .mmm {
          font-style: italic;
          text-align: center;
          font-size: 28px;
          color: #650089c9;
          font-weight: 500;
          background-color: white;
        }
      }

      li {
        margin-bottom: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #edddd4;;
        padding: 10px 20px;
        border-bottom: 1px solid black;
        border-top: 1px solid black;

        a {
          font-size: 15px;
          font-weight: 700;
        }

        button {
          font-size: 15px;
          transition: 0.2s;
          letter-spacing: 1px;
          background-color: $mainColor;
          color: white !important;
          padding: 4px 10px;
          border-radius: 6px;
          font-weight: 700;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid $mainColor;
          outline: none;
        }

        .saved-link {
          background-color: white;
          color: black !important;
          border: 1px solid black;
        }
      }
    }
  }
}

.search-preview .result-popup {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.587);
  z-index: 3000;
  display: none;
  justify-content: center;
  align-items: center;

  .body {
    width: 50%;
    color: black;
    background-image: url("../../../assets/bg-img.jpg");
    background-size: cover;
    text-align: center;
    border-radius: 11px;
    padding-bottom: 30px;

    p {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 30px;
    }

    th {
      font-size: 24px;
      font-weight: 600;
      font-family: cursive;
    }

    .total,
    .result,
    .percentage {
      font-size: 22px;
      font-weight: 900;
      padding-top: 15px;
      letter-spacing: 1px;
    }

    button {
      border: 1px solid #0f0f0f;
      background-color: #882481e4;
      color: white;
      border-radius: 4px;
      padding: 5px 13px 7px;
      margin-top: 10px;
      width: 155px;
      font-size: 25px;
    }

    button:hover {
      background-color: #099e09;
    }
  }
}

.search-preview .show-prof-img {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 20000;
  display: none;
  background: rgba(0, 0, 0, 0.812);

  .img-feild {
    width: 47%;
    height: 100%;
    position: fixed;
    left: 50%;
    top: 0%;
    transform: translateX(-50%);
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
  }
}

//Media Queries
@media (max-width: 990px) {
  .search-preview .add-url-div .urls .empty-urls p {
    font-size: 19px;
  }

  .search-preview .add-exam-div .exams .empty-exams p {
    font-size: 19px;
  }
}

@media (max-width: 767px) {
  .search-preview {
    .profile-data {
      .the-img img {
        width: 150px !important;
        height: 150px !important;
      }

      p {
        font-size: 22px !important;
      }

      button {
        font-size: 13px !important;
      }
    }

    .add-exam-div {
      .title h3 {
        font-size: 17px;
      }

      .exams {
        height: 90%;
      }

      .exams .exam .exam-body {
        .exam-title {
          font-size: 11px !important;
        }

        .exam-time {
          font-size: 7px !important;
        }

        .exam-status {
          font-size: 7px;
        }
      }
    }

    .add-url-div {
      .title h3 {
        font-size: 17px;
      }

      .urls {
        height: 90%;

        li a {
          font-size: 12px;
        }

        li button {
          font-size: 12px !important;
        }
      }

      .add-url {
        font-size: 15px;
        padding: 7px 12px;
      }

      .write-url-div {
        input {
          padding-top: 2px;
          padding-bottom: 2px;
          font-size: 12px;
          width: 100%;
        }

        button .confirm-url {
          width: 25px;
          height: 25px;
          font-size: 9px;
        }
      }
    }
  }
}

@media (max-width: 575px) {
  .search-preview {
    .profile-data {
      border-radius: 20px;

      .the-img img {
        width: 100px !important;
        height: 100px !important;
      }

      p {
        font-size: 17px !important;
      }

      button {
        font-size: 12px;
      }
    }

    margin-bottom: 20px;

    .add-exam-div {
      border-radius: 20px;

      .exams .empty-exams p {
        font-size: 15px;
      }
    }

    .add-url-div {
      height: 62vh;
      border-radius: 20px;

      .urls {
        .empty-urls p {
          font-size: 15px;
        }
      }

      .write-url-div {
        button {
          margin-top: 10px;
        }

        input {
          padding-top: 5px;
          padding-bottom: 7px;
          font-size: 12px;
          width: 79%;
        }
      }
    }
  }
}
</style>
