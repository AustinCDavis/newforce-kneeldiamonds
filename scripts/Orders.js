import { getOrders, getMetals, getSizes, getStyles } from "./database.js"

const metals = getMetals()
const sizes = getSizes()
const styles = getStyles()
const order = getOrders()

const buildOrderListItem = (order) => {
    
    // Remember that the function you pass to find() must return true/false
   //Find metal Price
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )
    const metalCost = foundMetal.price

    // Find Diamond Price
    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )
    const diamondCost = foundSize.price

    //Find Style Price
    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )
    const styleCost = foundStyle.price
    
    //Adding for total cost
    const totalCost = metalCost + diamondCost + styleCost

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return`<li>
        Order #${order.id} cost ${costString}
    </li>`

}



export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

