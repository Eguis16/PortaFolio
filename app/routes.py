from flask import Blueprint, flash, g, render_template, redirect, url_for, request
import os

bp = Blueprint('auth', __name__, url_prefix='/auth')


@bp.route('/')
def home():
    return render_template('index.html')

@bp.route('/sobre_mi', methods=['GET', 'POST'])
def inicio():

    return render_template('auth/inicio.html')