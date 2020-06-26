@JsExport
fun start(): String {
    return DateArithmetic.month(Date())
}

@JsModule("date-arithmetic")
@JsNonModule
external object DateArithmetic {
    fun month(date: Date): String
}

external class Date()