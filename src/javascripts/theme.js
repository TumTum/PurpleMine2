$(function () {
  /* global PurpleMine */
  'use strict'

  /* eslint-disable no-new */
  new PurpleMine.SidebarToggler()
  new PurpleMine.HistoryTabs()
  new PurpleMine.MenuCollapse()
  new PurpleMine.zFetchDom();
  // Customs
  new CustomPurpleMine.CommentDateCustomizer()
})
