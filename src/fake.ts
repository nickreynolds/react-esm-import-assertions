
import test from "./test.json" assert { type: 'json' }

export default function fake() {
  console.log("fake: ", test)
  return test
}