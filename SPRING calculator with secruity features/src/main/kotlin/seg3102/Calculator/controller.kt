package seg3102.Calculator
 import org.springframework.web.bind.annotation.GetMapping
 import org.springframework.web.bind.annotation.PathVariable
 import org.springframework.web.bind.annotation.RequestMapping
 import org.springframework.web.bind.annotation.RestController

 @RestController
 @RequestMapping("calculator")
 class CalculatorController {
      @GetMapping("/add/{num1}/{num2}")
      fun getAdd(@PathVariable num1: Double, @PathVariable num2: Double) = (num1 + num2)
      
      @GetMapping("/subtract/{num1}/{num2}")
      fun getSub(@PathVariable num1: Double, @PathVariable num2: Double) = (num1 - num2)
      
      @GetMapping("/multiply/{num1}/{num2}")
      fun getMulti(@PathVariable num1: Double, @PathVariable num2: Double) = (num1 * num2)
      
      @GetMapping("/divide/{nnum1}/{num2}")
      fun getDivi(@PathVariable num1: Double, @PathVariable num2: Double) = (num1 / num2)
      }
 }