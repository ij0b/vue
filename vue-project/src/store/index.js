import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
		paymentsList: [],
        categoryList: [],
		rangeActivePayment: [],
        numberPages: null,
		numberPage: null,
		paymentsListLength: 12,
    },

    mutations: {
        setPaymentListData(state, payload) {
            state.paymentsList = payload;
        },
        addDataToPaymentsList(state, payload) {
			state.paymentsListLength++;
			payload.id = state.paymentsListLength;
            state.paymentsList.push(payload);
        },
        setCategoryList(state, payload) {
            state.categoryList = payload
        },
    },

    actions: {
		fetchData({commit},number_TrPage){
			function idExists(id) {
				return paymentsList.some(function(el) {
					return el.id === id;
				}); 
			}
			
			console.log('fetchData -> state:',this.state);
			var numberPage = number_TrPage.numberPage;
			var numberTrPage = number_TrPage.numberTrPage;
			var paymentsList = this.state.paymentsList;
			var rangeActivePayment = this.state.rangeActivePayment;
			this.state.numberPage= numberPage;
            this.state.numberPages= Math.ceil(this.state.paymentsListLength/numberTrPage);
			rangeActivePayment[0] = (numberPage-1)*numberTrPage+1;
			rangeActivePayment[1] = numberPage*numberTrPage;
			if(this.state.paymentsListLength <= rangeActivePayment[1]){
				rangeActivePayment[1] = this.state.paymentsListLength;
			}
            return new Promise((resolve)=>{
                setTimeout(()=>{
					for(let i= rangeActivePayment[0];i<=rangeActivePayment[1]; i++){
						if(!idExists(i)){
							paymentsList.push({
								id: i,
								date: "23.12.2020",
								category: "Sport",
								value: i
							});
						}
					}
					paymentsList = paymentsList.filter(function (item) {
						return item
					})
                    resolve(paymentsList)
                },2000)
            }).then(res=>{
                commit('setPaymentListData', res)
            })
        },

        fetchCategory({commit}){
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve(['Food', 'Sport', 'Education', 'Auto', 'Health', 'Family'])
                },1000)
            }).then(res=> {
                commit('setCategoryList', res)
            })
        }
    },

    getters: {
        getPaymentList: state => [...state.paymentsList],

        getFullPyamentValue: state =>{
            return state.paymentsList.reduce((res, cur)=> res + cur.value, 0)
        },
		
        getCategoryList: state=>state.categoryList
    }
}) 