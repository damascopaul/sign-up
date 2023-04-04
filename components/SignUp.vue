<template>
  <div class="sign-up">
    <h1>
      Create Account
    </h1>

    <InputText
      v-model="mobile"
      :error="parseFieldError('mobile')"
      placeholder="Mobile"
    />

    <InputText
      v-model="email"
      :error="parseFieldError('email')"
      placeholder="Email"
    />

    <InputPassword
      v-model="password"
      :error="parseFieldError('password')"
      placeholder="Password"
    />

    <ButtonPrimary
      label="Sign Up"
      :handle-click="processSignUp"
      :is-loading="isProcessing"
    />
  </div>
</template>

<script lang="ts">
import Joi from 'joi'
import { FieldError } from '~/interfaces/fieldError'

export default {
  data() {
    return {
      email: '',
      errors: [] as Array<FieldError>,
      isProcessing: false,
      mobile: '',
      password: '',
    }
  },
  methods: {
    /**
     * Formats the Joi errors into a simpler object structure.
     */
    formatValidationErrors(errorItems: Array<Joi.ValidationErrorItem>): Array<FieldError> {
      return errorItems.map(e => ({
        message: e.message,
        name: e.path[0] as string,
      }))
    },
    /**
     * Parses the error message given the field name.
     */
    parseFieldError(fieldName: string): string | null {
      return this.errors.find(e => e.name === fieldName)?.message || null
    },
    /**
     * Processes the sign up form.
     */
    processSignUp(): void {
      this.isProcessing = true
      // Adds an artifical lag to simulate processing.
      setTimeout(() => {
        const error = this.validateFields()
        if (error) {
          this.errors = this.formatValidationErrors(error.details)
        } else {
          this.errors = []
        }
        this.isProcessing = false
      }, 350)
    },
    /**
     * Validates the form fields.
     */
    validateFields(): Joi.ValidationError | null {
      const schema = Joi.object({
        email: Joi
          .string()
          .email({ tlds: { allow: false } })
          .required()
          .max(254),
        mobile: Joi
          .string()
          .regex(/^(09|\+639)\d{9}$/)
          .required()
          .messages({
            'string.pattern.base': '"mobile" is not a valid mobile number',
          }),
        password: Joi
          .string()
          .regex(/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z]).*$/)
          .required()
          .min(8)
          .max(254)
          .messages({
            'string.pattern.base': '"password" is not a valid password',
          }),
      })
      const { email, mobile, password } = this
      const { error } = schema.validate({ email, mobile, password }, { abortEarly: false })
      return error || null
    },
  },
}
</script>

<style lang="postcss" scoped>
  .sign-up {
    @apply flex flex-col justify-center;
    @apply w-full h-full max-w-sm md:max-h-[32rem];
    @apply py-4 px-8;
    @apply mx-auto md:my-auto;
    @apply rounded-3xl;
    @apply md:shadow-neu-flat;

    h1 {
      @apply flex justify-center;
      @apply text-2xl text-slate-900 font-semibold;
      @apply mb-8;
    }

    :deep(fieldset) {
      @apply mb-4;
    }

    :deep(.primary-button) {
      @apply mx-auto mt-4;
    }
  }
</style>
