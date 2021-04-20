# Generated by Django 3.2 on 2021-04-10 17:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_punchlink'),
    ]

    operations = [
        migrations.CreateModel(
            name='VanguardLink',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.URLField()),
                ('status', models.CharField(choices=[('unscraped', 'Unscraped'), ('scraped', 'Scraped')], default='unscraped', max_length=120)),
            ],
        ),
        migrations.AlterField(
            model_name='news',
            name='category',
            field=models.ForeignKey(default=81, on_delete=django.db.models.deletion.PROTECT, to='api.category'),
        ),
    ]