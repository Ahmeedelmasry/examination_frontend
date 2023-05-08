<template>
  <div class="sign-up">
    <TheLoading />
    <div class="logo d-none d-md-block">
      <img src="@/assets/home/large.png" alt="" />
    </div>
    <div
      class="main"
      :style="images.length > 0 ? `height: 170vh` : 'height: 800px'"
    >
      <div class="signup position-relative">
        <form @submit.prevent="getUserData">
          <label class="lbl" for="chk" aria-hidden="true">Sign up</label>

          <div class="position-relative">
            <input
              type="text"
              v-model="newUser.firstName"
              name="firstname"
              placeholder="First Name"
              class="firstname"
            />
            <span class="err" v-if="signupModule.errors">{{
              signupModule.errors.firstName
            }}</span>
          </div>
          <div class="position-relative">
            <input
              type="text"
              v-model="newUser.lastName"
              name="lastname"
              placeholder="Last Name"
              class="lastname"
            />
            <span class="err" v-if="signupModule.errors">{{
              signupModule.errors.lastName
            }}</span>
          </div>
          <div class="position-relative">
            <input
              type="text"
              v-model="newUser.email"
              name="email"
              placeholder="Email"
              class="email"
            />
            <span class="err" v-if="signupModule.errors">{{
              signupModule.errors.email
            }}</span>
          </div>
          <div class="pass-dad position-relative">
            <input
              :type="showPass ? 'text' : 'password'"
              v-model="newUser.pass"
              name="pswd"
              placeholder="Password"
              class="pass"
            />
            <i
              class="fa fa-eye-slash"
              v-if="showPass"
              @click="showPass = !showPass"
            ></i>
            <i class="fa fa-eye" v-else @click="showPass = !showPass"></i>
            <span class="err" style="left: 0" v-if="signupModule.errors">{{
              signupModule.errors.password
            }}</span>
          </div>
          <div class="user-position d-flex justify-content-center">
            <label class="lbl mr-2" style="color:black;cursor: pointer;font-size: larger">
              <input
                type="radio"
                name="position"
                style="margin-bottom: 15px"
                value="STUDENT"
                v-model="newUser.userRole"
                checked
              />
              Student
            </label>
            <label class="lbl ml-2" style="cursor: pointer;font-size: larger;color:black;">
              <input
                type="radio"
                name="position"
                style="margin-bottom: 15px"
                value="INSTRUCTOR"
                v-model="newUser.userRole"
              />
              Instructor
            </label>
          </div>
          <hr style="background-color: #848598; margin: -10px 20px 10px" />
          <div
            class="section-no d-flex justify-content-center align-content-center mb-4 flex-wrap"
            style="gap: 10px"
            v-if="newUser.userRole == 'STUDENT'"
          >
            <div class="d-flex flex-column">
              <label style="color: rgb(0, 0, 0);font-family:cursive; font-size: 17px" for="grade_no"
                >Your Grade</label
              >
              <select
                name="grade_no"
                id="grade_no"
                style="
                  padding: 5px 10px;
                  border-radius: 3px;
                  background: rgb(255, 255, 255);
                "
                v-model="newUser.gradeNo"
              >
                <option value="first">First Grade</option>
                <option value="second">Second Grade</option>
                <option value="third">Third Grade</option>
                <option value="fourth">Fourth Grade</option>
              </select>
            </div>
            <div class="d-flex flex-column">
              <label for="section_no" style="color: rgb(0, 0, 0);font-family:cursive; font-size:17px"
                >Your Section</label
              >
              <select
                style="
                  padding: 5px 10px;
                  border-radius: 3px;
                  background: white;
                "
                name="section_no"
                id="section_no"
                v-model="newUser.sectionNo"
              >
                <option value="no1">Section 1</option>
                <option value="no2">Section 2</option>
                <option value="no3">Section 3</option>
                <option value="no4">Section 4</option>
                <option value="no5">Section 5</option>
                <option value="no6">Section 6</option>
                <option value="no7">Section 7</option>
                <option value="no8">Section 8</option>
                <option value="no9">Section 9</option>
                <option value="no10">Section 10</option>
                <option value="no11">Section 11</option>
                <option value="no12">Section 12</option>
                <option value="no13">Section 13</option>
                <option value="no14">Section 14</option>
                <option value="no15">Section 15</option>
                <option value="no16">Section 16</option>
                <option value="no17">Section 17</option>
                <option value="no18">Section 18</option>
                <option value="no19">Section 19</option>
                <option value="no20">Section 20</option>
              </select>
            </div>
          </div>
          <hr style="background-color: #848598; margin: -10px 20px 10px" />
          <div class="upload-imgs" v-if="newUser.userRole == 'STUDENT'">
            <label
              class="d-block text-center"
              for="upload"
              style="color: rgb(0, 0, 0);font-family:cursive;font-size: 18px"
              >Upload 3 Security Images</label
            >
            <div
              style="
                width: 40px;
                margin: auto;
                height: 40px;
                position: relative;
              "
            >
              <i
                class="fa fa-camera"
                style="color: rgb(0, 0, 0); font-size: 30px; cursor: pointer"
              ></i>
              <input
                type="file"
                accept="image/*"
                @change="uploadImgs"
                name="upload"
                :disabled="images.length > 2"
              />
            </div>
            <div
              class="images-display"
              :style="`overflow-x: auto;
              overflow-x: auto;
              display: flex;
              justify-content: space-around;
              gap: 38px;
              
              padding: 0px 12px 5px;
              flex-wrap: wrap;
                ${
                  images.length > 0
                    ? 'height: 230px;margin-bottom: 25px;'
                    : 'height: unset;margin-bottom: 0;'
                }`"
            >
              <div
                v-for="(img, i) in images"
                :key="i"
                style="max-width: 200px; max-height: 200px"
              >
                <img
                  style="
                    width: 100%;
                    height: 100%;
                    border-radius: 10px;
                    border: 1px solid #c2c2c2;
                  "
                  :src="img.url"
                  alt=""
                />
                <i
                  class="fa fa-close"
                  style="
                    color: #000000;;
                    text-align: center;
                    margin: 10px auto 0;
                    cursor: pointer;
                    display: inherit;
                  "
                  @click="removeImg(i)"
                ></i>
              </div>
            </div>
            <div
              class="position-relative"
              :style="`${
                !checkImgsArr.isThreeImgs
                  ? 'margin-bottom: 52px;'
                  : 'margin-bottom: 0;'
              }`"
            >
              <span
                class="err"
                style="left: 50%; transform: translateX(-46%)"
                >{{ checkImgsArr.errMsg }}</span
              >
            </div>
          </div>
          <button @blur="removeImgsErr">Sign up</button>
        </form>
        <div class="go-signup">
          <router-link to="/signin">Login</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import TheLoading from "../loading/TheLoading.vue";

export default {
  name: "SignUp",
  components: {
    TheLoading,
  },
  data() {
    return {
      checkImgsArr: {
        isThreeImgs: true,
        errMsg: "",
      },
      newUser: {
        firstName: "",
        lastName: "",
        email: "",
        pass: "",
        userRole: "STUDENT",
        sectionNo: "no1",
        gradeNo: "first",
        securityImgs: [],
      },
      images: [],
      showPass: false,
    };
  },
  computed: {
    ...mapState(["signupModule"]),
  },
  watch: {
    "newUser.userRole"(val) {
      if (val == "INSTRUCTOR") {
        this.images = [];
        this.newUser.securityImgs = [];
      }
    },
  },
  methods: {
    ...mapActions([
      "doValidateSignup",
      "doResetUpErrs",
      "doCheckAuth",
      "testUploadImgs",
    ]),
    uploadImgs(e) {
      if (!e.target.files[0]) {
        return;
      }

      let imgObj = {
        file: e.target.files[0],
      };
      let checkExists = false;

      this.newUser.securityImgs.forEach((img) => {
        if (img.name == e.target.files[0].name) {
          checkExists = true;
        }
      });

      if (!checkExists) {
        const fileReader = new FileReader();
        const img = e.target.files[0];
        this.newUser.securityImgs.push(img);
        fileReader.readAsDataURL(img);
        fileReader.addEventListener("load", () => {
          imgObj.url = fileReader.result;
          this.images.push(imgObj);
        });
      }
    },
    removeImg(index) {
      this.images.splice(index, 1);
      this.newUser.securityImgs.splice(index, 1);
    },
    async getUserData() {
      const checkAuth = await this.doCheckAuth(this.$store.state.apiLink);
      if (checkAuth) {
        this.$router.push("/");
      } else {
        if (this.images.length < 3 && this.newUser.userRole == "STUDENT") {
          this.checkImgsArr.isThreeImgs = false;
          this.checkImgsArr.errMsg = "You have to upload 3 images of your face";
          return;
        }
        this.checkImgsArr.isThreeImgs = true;
        this.checkImgsArr.errMsg = "";
        await this.doValidateSignup(this.newUser);
        if (!this.signupModule.errors) {
          document.querySelector(".sign-up .loading").style.cssText = `
            opacity: 0.7; visibility: visible
          `;
          const formData = new FormData();
          this.newUser.securityImgs.forEach((img) => {
            formData.append("image", img);
          });
          const securImgs = {
            images: formData,
            email: this.newUser.email,
          };
          if (this.newUser.userRole == "STUDENT") {
            await this.testUploadImgs(securImgs);
          }
          setTimeout(() => {
            document.querySelector(".sign-up .loading").style.cssText = `
              opacity: 0; visibility: hidden
          `;
            localStorage.setItem("rule", this.newUser.userRole);
            this.$router.push("/");
          }, 1000);
        }
      }
    },
    removeImgsErr() {
      this.checkImgsArr.isThreeImgs = true;
      this.checkImgsArr.errMsg = "";
    },
    closePopup(e) {
      e.currentTarget.style.display = "none";
      setTimeout(() => {
        this.$router.push("/signin");
      }, 1000);
    },
    async mounted() {
      document.querySelector(".sign-up .loading").style.cssText = `
        opacity: 1; visibility:visible
      `;
      this.doResetUpErrs();
      const checkAuth = await this.doCheckAuth(this.$store.state.apiLink);

      if (checkAuth) {
        this.$router.push("/");
      } else {
        document.querySelector(".sign-up .loading").style.cssText = `
        opacity: 0; visibility:hidden
      `;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../../assets/sass/main";

.sign-up {
  body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: "Jost", sans-serif;
  }
  .logo {
    position: absolute;
    left: 50px;
    width: 165px;
    top: 10px;
    img {
      width: 100%;
    }
  }
  .main {
    width: 400px;
    height: 122vh;
    background: red;
    overflow: hidden;
    background: url("https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38")
      no-repeat center/ cover;
    border-radius: 10px;
    box-shadow: 5px 20px 50px #000;
    margin: 0 auto;
    margin-top: 10px;
  }
  .signup {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url("../../../assets/login.jpg");
    background-size: cover;
  }
  label.lbl {
    color: #000000;
    font-size: 2.7em;
    justify-content: center;
    display: flex;
    margin: 0px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    font-family:'Courier New', Courier, monospace;
  }

  input:not([type="file"]) {
    width: 75%;
    height: 40px;
    background: #ffffff;
    justify-content: center;
    display: flex;
    margin: 30px auto 0;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
  }
  input[type="file"] {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  .pass-dad {
    width: 60%;
    margin: auto;
    position: relative;
    input {
      width: 100%;
    }
    i {
      position: absolute;
      top: 50%;
      right: 5px;
      transform: translateY(-50%);
      cursor: pointer;
    }
  }
  button {
    width: 50%;
    height: 40px;
    margin: 10px auto;
    justify-content: center;
    display: block;
    color: #fff;
    background-color: #882481e4;
    font-size: 22px;
    font-weight: bold;
    outline: none;
    border: none;
    border-radius: 70px;
    transition: 0.3s ease-in;
    cursor: pointer;
    margin-top: 0px;
    opacity: 0.8;
  }
  button:hover {
    transition: 12ms;
    opacity: 1;
    background-color: #099e09;
  }
  .user-position {
    label {
      color: #fff;
      font-size: 15px;
      justify-content: center;
      display: flex;
      margin: 0;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family:'Courier New', Courier, monospace;
      input {
        margin: 15px;
      }
    }
  }
  .login {
    height: 460px;
    background: #eee;
    border-radius: 60% / 10%;
    transform: translateY(-180px);
    transition: 0.8s ease-in-out;
  }
  .go-signup {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 1px;
    width: 100%;
    height: 68px;
    background: #ececec;
    z-index: 10;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      color: black;
      font-size: 28px;
      font-weight: 700;
    }
  }
  span.err {
    font-family:cursive;
    font-weight: 800;
    align-content: center;
    position:relative;
    border-radius: 20px;
    top: 100%;
    left: 10px;
    display: block;
    color: rgba(243, 0, 0, 0.95);
    letter-spacing: 1px;
    font-size: 18px;
    width: 70%;
    margin: auto;
    padding: 10px;
  }
  .loading {
    opacity: 0;
    visibility: hidden;
  }
}
@media (max-width: 450px) {
  .sign-in .main {
    width: 95%;
  }
}
</style>
