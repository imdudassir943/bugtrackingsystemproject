from rest_framework import serializers
from .models import Bug

class BugSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bug
        fields = '__all__'

    def validate(self, data):
        bug_type = data.get('type')
        status = data.get('status')

        feature_status_choices = ['new', 'started', 'completed']
        bug_status_choices = ['new', 'started', 'resolved']

        if bug_type == 'feature' and status not in feature_status_choices:
            raise serializers.ValidationError(
                {"status": "Invalid status for feature. Must be one of: new, started, completed."}
            )
        elif bug_type == 'bug' and status not in bug_status_choices:
            raise serializers.ValidationError(
                {"status": "Invalid status for bug. Must be one of: new, started, resolved."}
            )
        return data
