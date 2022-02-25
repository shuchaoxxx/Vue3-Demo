export const followMinix = {
  data () {
    return {
      loading:false
    }
  },
  methods: {
    say() {
      console.log(this.loading)
      console.log('混入了Minix');
    }
  }
}