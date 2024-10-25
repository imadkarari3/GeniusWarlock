document.getElementById('shared-content').innerHTML = '<p>If you'd like to read the full novel, consider subscribing for exclusive access to all chapters. Once subscribed, you'll receive an invite to access everything in <strong><a href="https://geniuswarlock.blogspot.com/p/chapters-list.html">HERE</a></strong>.</p><p>Subscription is just $5 USD (or equivalent in your currency).&nbsp;</p><p><br /></p><p>
</p>';
// Your additional JavaScript code
<div id="paypal-button-container-P-6VN47227P83436029M4JF2KA"></div>
<script data-sdk-integration-source="button-factory" src="https://www.paypal.com/sdk/js?client-id=ATmvj-Z7_1ULNgj59zxMFWnI0XjYT4oE3Upzm9rW_LtO8QHzV8H_QPLHXVGCMf8BFu4w4chcOGo7l1IB&amp;vault=true&amp;intent=subscription"></script>
<script>
  paypal.Buttons({
      style: {
          shape: 'pill',
          color: 'gold',
          layout: 'vertical',
          label: 'subscribe'
      },
      createSubscription: function(data, actions) {
        return actions.subscription.create({
          /* Creates the subscription */
          plan_id: 'P-6VN47227P83436029M4JF2KA'
        });
      },
      onApprove: function(data, actions) {
        alert(data.subscriptionID); // You can add optional success message for the subscriber here
      }
  }).render('#paypal-button-container-P-6VN47227P83436029M4JF2KA'); // Renders the PayPal button
</script>