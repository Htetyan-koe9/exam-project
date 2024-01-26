<template>
  <div class="base-dialog">
    <div class="dialog">
      <div class="dialog-header">
        <h3>Form Upload</h3>
      </div>

      <div class="dialog-content">
        <div class="input-form">
          <div class="input-section">
            <label for="fullName">FullName</label>
            <input
              type="text"
              id="fullplayName"
              v-model="fullname"
              required
              :class="{ error: fullnameError }"
              @focus="fullnameError = ''"
            />
            <span v-if="fullnameError" class="error-message">
              {{ fullnameError }}
            </span>
          </div>

          <div class="input-section">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              required
              :class="{ error: emailError }"
              @focus="emailError = ''"
            />
            <span v-if="emailError" class="error-message">
              {{ emailError }}
            </span>
          </div>

          <div class="input-section">
            <label for="subject">Subject</label>
            <input
              type="text"
              id="subject"
              v-model="subject"
              required
              :class="{ error: subjectError }"
              @focus="subjectError = ''"
            />
            <span v-if="subjectError" class="error-message">
              {{ subjectError }}
            </span>
          </div>

          <div class="input-section">
            <label for="message">Message</label>
            <input
              type="text"
              id="message"
              v-model="message"
              required
              :class="{ error: messageError }"
              @focus="messageError = ''"
            />
            <span v-if="messageError" class="error-message">
              {{ messageError }}
            </span>
          </div>
        </div>
        <div class="footer">
          <button class="cancel-btn" @click="handleClosePopup">Cancel</button>
          <button class="submit-btn" @click="handleUploadData">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      fullname: "",
      email: "",
      subject: "",
      message: "",

      fullnameError: "",
      emailError: "",
      subjectError: "",
      messageError: "",
    };
  },
  methods: {
    handleClosePopup() {
      this.fullname = "";
      this.email = "";
      this.subject = "";
      this.message = "";
      this.$emit("closePopup");
    },
    handleUploadData() {
      const formData = new FormData();
      formData.append("fullname", this.fullname);
      formData.append("email", this.email);
      formData.append("subject", this.subject);
      formData.append("message", this.message);

      axios
        .post(
          "https://super7tech.com/web_developer_exam_sr/api/sendMessage",
          formData
        )
        .then((response) => {
          console.log("Form data sent successfully", response);
          this.$emit("closePopup");
        })
        .catch((error) => {
          if (error.response && error.response.data.errors) {
            const { fullname, email, subject, message } =
              error.response.data.errors.field;

            if (fullname) {
              this.fullnameError = fullname;
            }
            if (email) {
              this.emailError = email;
            }
            if (subject) {
              this.subjectError = subject;
            }
            if (message) {
              this.messageError = message;
            }
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.base-dialog {
  position: fixed;
  z-index: 52005;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #232323;
  background-color: rgba(#232323, 0.8);

  .dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fefefe;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    width: 500px;
    max-height: 710px;
    overflow: auto;

    .dialog-header {
      height: 95px;
      border-bottom: 2px solid #001e5a;
      h3 {
        text-align: center;
        font-size: 28px;
        color: #707070;
        padding: 30px 0px;
      }

      //   .close-icon {
      //     float: right;
      //     font-size: 20px;
      //     padding: 10px 15px;
      //     cursor: pointer;
      //   }
    }

    .dialog-content {
      padding: 25px 0px;
      max-height: 500px;
      overflow: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .input-form {
        margin-bottom: 30px;
        margin-left: 50px;
        width: 400px;

        label {
          font-size: 15px;
        }

        input {
          width: 100%;
          padding: 10px;
          border-radius: 10px;
          border: 1px solid rgba(#000, 0.3);
        }

        .error {
          border: 1px solid red;
        }

        .error-message {
          color: red;
          font-size: 10px;
        }
      }

      .input-section {
        margin-bottom: 10px;
      }

      .footer {
        display: flex;
        justify-content: center;
      }
    }
  }

  .cancel-btn,
  .submit-btn {
    width: 130px;
    height: 35px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
  }

  .cancel-btn {
    background: inherit;
    color: #001e5a;
    margin-right: 15px;
    border: 1px solid #001e5a;
  }

  .submit-btn {
    background-color: #001e5a;
    color: #fff;
  }
}
</style>