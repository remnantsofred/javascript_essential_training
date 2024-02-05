/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const desk = {
  name: "Uplift desk",
  width: "3 ft",
  length: "2 ft",
  height: 4,
  setHeight: function (newHeight) {
    this.height = newHeight;
  },
  monitors: {
    left: true,
    right: true,
  },
  updateMonitors: function (side, status) {
    this.monitors[side] = status;
    console.log(`${side} status`, this.monitors[side])
  }
}

const iPhone = {
  name: "Daphne's cell",
  size: "regular",
  battery: 98,
  focusMode: true,
  toggleFocusMode: function () {
    this.focusMode = !this.focusMode;
  },
  chargePhone: function() {
    this.battery = 100;
  }
}


console.log("desk object:", desk)
console.log("update monitors", desk.updateMonitors("left", false))
console.log("updated desk:", desk)
console.log('iPhone', iPhone)