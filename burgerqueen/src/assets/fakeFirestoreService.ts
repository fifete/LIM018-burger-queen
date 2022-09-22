export const orderItemsDummie = [
    {
        client: "Candas",
        hour: "10:10",
        items: [
            {
                category: "desayuno",
                id: "JFN",
                img: "httpsgnc.png",
                name: "jugo de frutas natural",
                price: "10",
                quantity: 1
            },
            {
                category: "desayuno",
                id: "PPA",
                img: "httpsgnc.png",
                name: "Sandwich de jamón y queso",
                price: "7",
                quantity: 1
            }
        ],
        mesa: "3",
        state: "creado",
        total: 17,
    },
    {
        client: "Perry",
        hour: "11:11",
        items: [
            {
                category: "desayuno",
                id: "SJQD",
                img: "httpsgnc.png",
                name: "Sandwich de jamón y queso",
                price: "10",
                quantity: 1
            },
            {
                category: "desayuno",
                id: "PPA",
                img: "httpsgnc.png",
                name: "Sandwich de jamón y queso",
                price: "10",
                quantity: 1
            }
        ],
        mesa: "4",
        state: "creado",
        total: 20,
    }
]

// mock firestore
/*     firestoreServiceStub = jasmine.createSpyObj('firestoreService', ['getOrdersByState', 'updateOrder'])
    firestoreServiceStub.updateOrder */
   /*  menuItemStub = {
        saveOrder: function (data) {
          return data
        }
      }
  
      firestoreServiceStub = {
        updateOrder: function (id, { state: state}) {
          component.orderItems[0].state = state
        },
        getOrdersByState: function (state) {
          filteredItems = orderItemsDummie.filter(item=> item.state === state)
          // component.orderItems = filteredItems
  
          return of([
            {
              payload: {
                doc: {
                  data: function() {return orderItemsDummie[0]},
                  id: '1234'
                }
              }
            },
            {
              payload: {
                doc: {
                  data: function() {return orderItemsDummie[0]},
                  id: '123'
                }
              }
            }
          ])
        }}
   */