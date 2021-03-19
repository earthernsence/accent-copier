/* eslint-disable max-len */
"use strict";

// eslint-disable-next-line prefer-const
let app = Vue.createApp({});

const accents = [{ name: "C with cedilla (l)", content: "\u{000E7}" },
  { name: "C with cedilla (u)", content: "\u{000C7}" },
  { name: "A with grave (u)", content: "\u{00C0}" },
  { name: "A with grave (l)", content: "\u{00E0}" },
  { name: "E with circumflex (u)", content: "\u{00CA}" },
  { name: "E with circumflex (l)", content: "\u{00EA}" },
  { name: "E with grave (u)", content: "\u{00C8}" },
  { name: "E with grave (l)", content: "\u{00E8}" },
  { name: "E with acute (u)", content: "\u{00C9}" },
  { name: "E with acute (l)", content: "\u{00E9}" },
  { name: "AE ligature (u)", content: "\u{00C6}" },
  { name: "AE ligature (l)", content: "\u{00E6}" },
  { name: "OE ligature (u)", content: "\u{00152}" },
  { name: "OE ligature (l)", content: "\u{00153}" }];

app.component("body-component", {
  created() {
    this.forceUpdate();
  },
  data() {
    return {
      accents: Array,
    };
  },
  methods: {
    forceUpdate() {
      this.accents = accents;
    },
    copyAccent(asscheeks) {
      navigator.clipboard.writeText(asscheeks);
    }
  },
  template: 
    `
    <div style="text-align: center">
    <a href="https://earthernsence.github.io/"><b>&lt;&lt; back to main website &lt;&lt;</b></a><br>
    <a href="https://github.com/earthernsence/accent-copier/tree/main/">code</a>
    <h1 style="color:white">earth's accent copier</h1>
    <h2 style="color:white">&#128578; pain &#128578;</h2>
    <h3 style="color:white">lazyness will always win</h3>
    <h3 style="color:white">if there are any other accents you want added, go make a pull request on the code site.</h3>
    <div v-if="accents.length">
      <div v-for="accent in accents"><h2>{{ accent.name }}</h2><br><h2>{{ accent.content }}</h2><button v-on:click="copyAccent(accent.content)">copy {{ accent.content }}</button></div>
    </div>
    </div>
    `
});

app.mount("#vue");
