from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class UsersConfig(AppConfig):
    name = "app_021.users"
    verbose_name = _("Users")

    def ready(self):
        try:
            import app_021.users.signals  # noqa F401
        except ImportError:
            pass
