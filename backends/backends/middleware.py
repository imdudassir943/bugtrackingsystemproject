# from django.http import JsonResponse

# class RoleBasedAccessMiddleware:
#     def __init__(self, get_response):
#         self.get_response = get_response

#     def __call__(self, request):
#         if request.path.startswith('/admin/') or request.path.startswith('/api-users/register/'):
#             return self.get_response(request)
        
#         user = getattr(request, 'user', None)

#         if not user or not user.is_authenticated:
#             return JsonResponse({"detail":"Authentication Required!"}, status=401)
        
#         if request.path.startswith('api-projects/projects/') and request.method == ["POST", "PUT", "DELETE"]:
#             if user.role != 'manager':
#                 return JsonResponse({"detail": "Only Manager Can Modify Projects"}, status=403)
        
#         if request.path.startswith('api-bugs/bug/') and request.method == 'POST':
#             if user.role != 'qa':
#                 return JsonResponse({"detail": "Onlud QA Can Create the Bugs"}, status=403)
            
#         if request.path.startswith('api-bugs/bug/') and request.method == 'PATCH':
#             if user.role != 'developer':
#                 return JsonResponse({"detail": "Only Develper Can Update the Bugs"})
            
#         return self.get_response(request)
    
