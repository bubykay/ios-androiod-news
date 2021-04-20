# Generated by Django 3.2 on 2021-04-10 19:06

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20210410_1742'),
    ]

    operations = [
        migrations.AddField(
            model_name='punchlink',
            name='createdAt',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='vanguardlink',
            name='createdAt',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]