<template>
  <el-form :model="formData" :rules="rules" ref="registerForm" label-position="right" label-width="6em">
    <el-alert v-if="errors.__all" :title="errors.__all" type="error" :closable="false"></el-alert>
    <el-form-item label="手机号" prop="phone" :error="errors.phone">
      <el-input v-model="formData.phone" auto-complete="off" placeholder="请输入11位手机号"></el-input>
    </el-form-item>
    <el-form-item label="验证码" prop="code" :error="errors.code">
      <el-row>
        <el-col :span="12">
          <el-input v-model="formData.code" auto-complete="off" width="50px"></el-input>
        </el-col>
        <el-col :span="12">
          <el-button type="primary" @click="sendCode" style="margin-left:8px">
            获取验证码
          </el-button>
        </el-col>
      </el-row>
      <div v-if="codeValid && !errors.code" class="el-form-item__error" style="color:green">验证码已发送, 请注意查看手机</div>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">
        提交
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>

export default {
  computed: {

  },
  data() {
    return {
      codeValid: false,
      errors: {
        phone: '',
        code: '',
      },
      formData: {
        phone: '',
        code: '',
      },
      rules: {
        phone: [
          { required: true, message: '必须提供11位手机号',  },
          { pattern: /^\d{11}$/,  message: '请输入11位数字手机号', trigger: 'blur' },
        ],
        code: [
          { required: true, message: '必须提供验证码', trigger: 'blur' },
          { pattern: /^\d{6}$/,  message: '请输入6位数字验证码', trigger: 'blur' },
        ],
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.registerForm.validate((valid) => {
        if (valid) {
            setTimeout(() => {
                this.errors = {phone: '无效手机号'}
            }, 1000)
        } else {
          return false;
        }
      });
    },
    sendCode() {
      var phone = this.formData.phone
      if (!/^\d{11}$/.test(phone)) {
        this.errors.code = '请先输手机号'
        return
      }
      setTimeout(()=>{
        this.errors = {code: '无效验证码'}
      }, 1000)
    },
  },
}
</script>

