<template lang="pug">
client-only: form.form(
  @submit.prevent="onSubmit"
  ref="form" :action="url"
  )
  input(type="hidden" name="form-name" value="Contact")

  template(v-if="done")
    p Merci! Nous vous contacterons dans les plus brefs délais.

  template(v-if="!done")
    b-field(label="Message" :label-position="labelPosition")
      b-input(name="Message"
        placeholder="Écrivez votre message ici..." type="textarea"
        :disabled="disabled" required)

    .columns
      .column.my-0: b-field(label="Nom" :label-position="labelPosition")
        b-input(placeholder="Prénom Nom" :disabled="disabled" required name="Nom")
      .column.my-0: b-field(label="Courriel" :label-position="labelPosition")
        b-input(type="email" placeholder="adresse@courriel.com" :disabled="disabled" required name="Contact")

    b-field.actions.has-text-right
      b-button.primary(native-type="submit" :loading="disabled") Envoyer &rarr;
</template>

<script>
export default {
  props: {
    url: String
  },

  data: () => ({
    labelPosition: "inside",
    sending: false,
    done: false,
  }),

  computed: {
    disabled(){ return this.sending }
  },

  methods: {
    onSubmit(e){
      let formData = new FormData(this.$refs.form)
      this.sending = true

      fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      })
      .then(() => this.onSuccess())
      .catch((error) => this.onError(error))

    },

    onSuccess(){
      this.sending = false
      this.done = true
    },

    onError(error){
      this.sending = false
      console.log(error)
    }
  }
}
</script>
