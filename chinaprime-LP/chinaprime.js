//チェックが入ったら、ボタンを押せる
$(function() {
    $(".label_inner").click(function(){
      $(".notes_required").toggleClass("_check");
      $(".btnArea").toggleClass("_check");
    });
  });

// Creating the payload to create a Payment, additional parameters can be added basis the API Documentation
Payment payment = new Payment();
      payment.setAmount(new MoneyAmount().amount(10).currency(MoneyAmount.CurrencyEnum.JPY));
      payment.setMerchantPaymentId("my_payment_id");
      payment.setUserAuthorizationId("my_user_authorization_id");
      payment.setOrderDescription("Mune's Favourite Cake");
      payment.setRequestedAt(LocalDateTime.now().toEpochSecond(ZoneOffset.UTC));
// Calling the method to create a payment
PaymentApi apiInstance = new PaymentApi(apiClient);
String agreeSimilarTransanction = "false";
PaymentDetails response = apiInstance.createPayment(payment, agreeSimilarTransanction);
// Printing if the method call is SUCCESS, this does not mean the payment is a success
System.out.println(response.getResultInfo().getCode());
