from django.core.mail import EmailMessage
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def contact_view(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        feedback = request.POST.get('feedback')
        if name and email and feedback:
            try:
                email_message = EmailMessage(
                    subject='New Contact Us Message',
                    body=f'Name: {name}\nEmail: {email}\nFeedback: {feedback}',
                    from_email=email,
                    to=['li_allouche@esi.dz'],
                )
                email_message.send()
                return JsonResponse({'success': True})
            except Exception as e:
                return JsonResponse({'success': False, 'error': str(e)})
        else:
            return JsonResponse({'success': False, 'error': 'Invalid input data'})
    else:
        return JsonResponse({'success': False, 'error': 'Invalid request method'})
