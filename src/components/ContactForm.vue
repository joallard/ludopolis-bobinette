<template lang="pug">
form.form
  template(v-if="done")
    p Merci! Nous vous contacterons dans les plus brefs délais.

  template(v-else)
    b-field(label="Message" :label-position="labelPosition")
      b-input(placeholder="Écrivez votre message ici..." type="textarea" :disabled="disabled" required)

    .columns
      .column.my-0: b-field(label="Nom" :label-position="labelPosition")
        b-input(placeholder="Prénom Nom" :disabled="disabled" required)
      .column.my-0: b-field(label="Téléphone/Courriel" :label-position="labelPosition")
        b-input(placeholder="200 555-1234" :disabled="disabled" required)

    b-field.actions.has-text-right
      b-button.primary(:loading="disabled") Envoyer &rarr;
</template>

<script>
  export default {
    data: () => ({
      labelPosition: "inside",
      sending: false,
      done: false,
    }),

    computed: {
      disabled(){ return this.sending }
    }
  }
</script>
