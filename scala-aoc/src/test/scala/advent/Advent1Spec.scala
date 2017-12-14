package advent

import org.scalatest._

class Advent1Spec extends FlatSpec with Matchers {
  behavior of "The Advent1 class"


  val adventOne = new Advent1;
  it should "sum a captcha" in {
    adventOne.sumCaptcha("1122") shouldEqual 3
  }
}
