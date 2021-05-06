/*
 * This file is part of justoverclock/flarum-ext-infocards.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import { extend } from 'flarum/common/extend';
import app from 'flarum/app';
import IndexPage from 'flarum/components/IndexPage';
import username from 'flarum/common/helpers/username';
import formatNumber from 'flarum/utils/formatNumber';
import listItems from 'flarum/helpers/listItems';
import AvatarEditor from 'flarum/components/AvatarEditor';

/* global m */

app.initializers.add('justoverclock/flarum-ext-infocards', () => {
  extend(IndexPage.prototype, 'view', function (vdom) {
    const user = app.session.user;
    if (app.session.user)
      if (vdom.children && vdom.children.splice) {
        const insert = m('div', { class: 'containersocial' }, [
          m('div', { class: 'card card-2' }, [
            m('h3', { class: 'textone' }, app.translator.trans('flarum-ext-infocards.forum.welcome_back')),
            m('div', { class: 'avataric' }, AvatarEditor.component({ user })),
            m('p', { class: 'textone' }, m('strong', username(user))),
            m('p', app.translator.trans('flarum-ext-infocards.forum.groups'), ':'),
            m('div', { class: 'icocont' }, m('div', { class: 'iconbadge' }, listItems(user.badges().toArray()))),
          ]),
          m('div', { class: 'card card-2' }, [
            m('h3', { class: 'fontic2' }, app.translator.trans('flarum-ext-infocards.forum.forumstats')),
            m('p', app.translator.trans('flarum-ext-infocards.forum.totdisc'), ': ', m('b', formatNumber(user.discussionCount()))),
            m('p', app.translator.trans('flarum-ext-infocards.forum.totalpost'), ':'),
            m('div', { class: 'numbercount' }, m('span', formatNumber(user.commentCount()))),
          ]),
          m('div', { class: 'card card-2' }, [
            m('h3', { class: 'fontic3' }, app.translator.trans('flarum-ext-infocards.forum.geninfo')),
            m('div', { class: 'time', id: 'time' }),
            m('p', app.translator.trans('flarum-ext-infocards.forum.wasviewed')),
            m('div', { class: 'numbercount' }, m('span', { id: 'count' }), ' ', app.translator.trans('flarum-ext-infocards.forum.times')),
          ]),
        ]);
        vdom.children.splice(1, 0, insert);
      }
  });
  extend(IndexPage.prototype, 'oncreate', function () {
    const countVisit = document.getElementById('count');
    const apik = app.forum.attribute('ApiKey');
    /*if (apik === "") {
      alert("Remember to create your Api in admin panel, or visits can't be showed"); // add an alert for empty APik field
      return false;
    }*/
    if (countVisit === null) return;
    updateVisitCount();

    function updateVisitCount() {
      fetch(apik)
        .then((res) => res.json())
        .then((res) => {
          countVisit.innerHTML = res.value;
        });
    }
  });
  extend(IndexPage.prototype, 'oncreate', function () {
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var dayNames = [
      app.translator.trans('flarum-ext-infocards.forum.sunday'),
      app.translator.trans('flarum-ext-infocards.forum.monday'),
      app.translator.trans('flarum-ext-infocards.forum.tuesday'),
      app.translator.trans('flarum-ext-infocards.forum.wednesday'),
      app.translator.trans('flarum-ext-infocards.forum.thursday'),
      app.translator.trans('flarum-ext-infocards.forum.friday'),
      app.translator.trans('flarum-ext-infocards.forum.saturday'),
    ];
    function checkTime() {
      var date = new Date();
      var sufix = '';
      var hours = ('0' + date.getHours()).slice(-2);
      var minutes = ('0' + date.getMinutes()).slice(-2);
      var day = date.getDate();
      var month = monthNames[date.getMonth()];
      var weekday = dayNames[date.getDay()];
      if (day > 3 && day < 21) sufix = 'th';
      switch (day % 10) {
        case 1:
          sufix = 'st';
        case 2:
          sufix = 'nd';
        case 3:
          sufix = 'rd';
        default:
          sufix = 'th';
      }
      const timeElement = document.getElementById('time');
      if (timeElement)
        document.getElementById('time').innerHTML =
          "  It's <span class='hour'>" + hours + ':' + minutes + "</span><br/><span class='date'>" + month + ' ' + day + sufix + ', ' + weekday + '.';
    }
    setInterval(checkTime(), 1000);
  });
});
