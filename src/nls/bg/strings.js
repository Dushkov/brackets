/*
 * Copyright (c) 2012 Adobe Systems Incorporated. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */

define({
    
    /**
     * Errors
     */

    // General file io error strings
    "GENERIC_ERROR"                      :  "(Грешка {0})",
    "NOT_FOUND_ERR"                      :  "Файлът не може да бъде намерен.",
    "NOT_READABLE_ERR"                   :  "Файлът не може да бъде прочетен.",
    "EXCEEDS_MAX_FILE_SIZE"              :  "Файлове по-големи от {0} MB не могат да бъдат отворени в {APP_NAME}.",
    "NO_MODIFICATION_ALLOWED_ERR"        :  "Папката дестинация не може да се променя.",
    "NO_MODIFICATION_ALLOWED_ERR_FILE"   :  "Разрешенията не ви позволяват да правите промени.",
    "CONTENTS_MODIFIED_ERR"              :  "Файлът е бил променен извън {APP_NAME}.",
    "UNSUPPORTED_ENCODING_ERR"           :  "{} APP_NAME в момента поддържа само UTF-8 кодирани текстови файлове.",
    "FILE_EXISTS_ERR"                    :  "Файлът вече съществува.",
    "FILE"                               :  "файл",
    "File_TITLE"                         :  "Файл",
    "DIRECTORY"                          :  "папка",
    "DIRECTORY_TITLE"                    :  "Папка",
    "DIRECTORY_NAMES_LEDE"               :  "Името на папката",
    "FILENAMES_LEDE"                     :  "името на файла",
    "FILENAME"                           :  "името на файла",
    "DIRECTORY_NAME"                     :  "Името на папката",
    

    // Project error strings
    "ERROR_LOADING_PROJECT"             : "Грешка при зареждане на проекта",
    "OPEN_DIALOG_ERROR"                 : "Грешка при показване на диалогов прозорец за отваряне на файлове. (error {0})",
    "REQUEST_NATIVE_FILE_SYSTEM_ERROR"  : "Грешка при зареждане на папка <span class='dialog-filename'>{0}</span>. (error {1})",
    "READ_DIRECTORY_ENTRIES_ERROR"      : "Грешка при четене на съдържанието на директорията <span class='dialog-filename'>{0}</span>. (error {1})",

    // File open/save error string
    "ERROR_OPENING_FILE_TITLE"          : "Грешка при отваряне на файл",
    "ERROR_OPENING_FILE"                : "Възникна грешка, при отварянето на файл <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_OPENING_FILES"               : "Възникна грешка при отваряне на следните файлове:",
    "ERROR_RELOADING_FILE_TITLE"        : "Грешка при презареждането на промените от диска",
    "ERROR_RELOADING_FILE"              : "Възникна грешка при презареждането на файла <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_SAVING_FILE_TITLE"           : "Грешка при записване на файл",
    "ERROR_SAVING_FILE"                 : "Възникна грешка при записването на файла <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_RENAMING_FILE_TITLE"         : "Грешка при преименуване на {0}",
    "ERROR_RENAMING_FILE"               : "Възникна грешка при опита да се изстрие {2} <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_DELETING_FILE_TITLE"         : "Грешка при изстриване  {0}",
    "ERROR_DELETING_FILE"               : "Възникна грешка, при опита да бъде изстрит файла{2} <span class='dialog-filename'>{0}</span>. {1}",
    "INVALID_FILENAME_TITLE"            : "Невалиден {0}",
    "INVALID_FILENAME_MESSAGE"          : "{0} не могат да се използват думи, които са запазени за позлване от системата, завършващи с точки (.) или някои от следните символи: <code class='emphasized'>{1}</code>",
    "ENTRY_WITH_SAME_NAME_EXISTS"       : "Файл или директория с име <span class='dialog-filename'>{0}</span> вече съществуват.",
    "ERROR_CREATING_FILE_TITLE"         : "Грешка при създаване {0}",
    "ERROR_CREATING_FILE"               : "Появи се грешка при създаването на  {0} <span class='dialog-filename'>{1}</span>. {2}",
    "ERROR_MIXED_DRAGDROP"              : "Не може да се отовори папка и в същото време да се отварят други файлове",

    // User key map error strings
    "ERROR_KEYMAP_TITLE"                : "Грешка при четене на  User Key Map",
    "ERROR_KEYMAP_CORRUPT"              : "твоят key map файл не е валиден JSON файл. Файлът ще се отвори, за можете да промените формата.",
    "ERROR_LOADING_KEYMAP"              : "твоят key map файл не е валиден UTF-8 текстови файл и не може да бъде зареден",
    "ERROR_RESTRICTED_COMMANDS"         : "Не може да промените преките пътища към тези команди: {0}",
    "ERROR_RESTRICTED_SHORTCUTS"        : "Не можете да промените тези  преки пътища: {0}",
    "ERROR_MULTIPLE_SHORTCUTS"          : "Вие променихте няколко преки пътя към тези команди: {0}",
    "ERROR_DUPLICATE_SHORTCUTS"         : "Вие имате няколко свързвания на тези преки пътища: {0}",
    "ERROR_INVALID_SHORTCUTS"           : "Тези преки пътища са невалидни: {0}",
    "ERROR_NONEXISTENT_COMMANDS"        : "Вие променихте преки пътища към несъществуващи команди: {0}",

    // Application preferences corrupt error strings
    "ERROR_PREFS_CORRUPT_TITLE"         : "Грешка при Настройки",
    "ERROR_PREFS_CORRUPT"               : "твоят файл с настройки не е валиден JSON файл. Файлът ще се отвори за можете да промените формата.Ще трябва да рестартирате {APP_NAME} за да влязат в сила промените.",

    // Application error strings
    "ERROR_IN_BROWSER_TITLE"            : "Опааа! {APP_NAME} Не може да работи в браузъра.",
    "ERROR_IN_BROWSER"                  : "{APP_NAME} е написан в HTML, но в момента работи като декстоп приложение, но можете да промените локално файловете. Моля използвайте application shell в <b>github.com/adobe/brackets-shell</b> репозитор за да стартирате {APP_NAME}.",
    
    // ProjectManager max files error string
    "ERROR_MAX_FILES_TITLE"             : "Грешка при индексиране на файлове",
    "ERROR_MAX_FILES"                   : "Този проект съдържа повече от 30,000 файла. Функции, които взаимодействат с множество файлове, може да се деактивират, или се държат така, сякаш в проекта няма файлове. <a href='https://github.com/adobe/brackets/wiki/Large-Projects'>Прочетете повече за работа с големи проекти.</a>.",

    // Преглед на Живо error strings
    "ERROR_LAUNCHING_BROWSER_TITLE"     : "Грешка при зареждане на браузъра",
    "ERROR_CANT_FIND_CHROME"            : "Браузъра Google Chrome не може да бъде открит. Моля уверете се, че е инсталиран.",
    "ERROR_LAUNCHING_BROWSER"           : "Грешка при зареждане на браузъра. (error {0})",
    
    "LIVE_DEVELOPMENT_ERROR_TITLE"      : "Грешка при прегледа на живо",
    "LIVE_DEVELOPMENT_RELAUNCH_TITLE"   : "Свързване с браузъра",
    "LIVE_DEVELOPMENT_ERROR_MESSAGE"    : "Ако желаете прегледа на живо да установи вързка, Chrome ще трябва да се стартира отново, като се разреши remote debugging.<br /><br />Желаете ли да стартирате отново Chrome и да разрешите remote debugging?<br /><br />",
    "LIVE_DEV_LOADING_ERROR_MESSAGE"    : "Не може да зареди страницата за Преглед на Живо.",
    "LIVE_DEV_NEED_HTML_MESSAGE"        : "Отворете HTML файл или се уверете че съществува файл index.html във твоя проект за да може да се зареди прегледа на живо",
    "LIVE_DEV_NEED_BASEURL_MESSAGE"     : "За да стартирате Преглед на Живо за файл, който е на ваш сървър, ще трябва да посочите Base URL на този проект.",
    "LIVE_DEV_SERVER_NOT_READY_MESSAGE" : "Грешка при стартиране на HTTP сървър за Преглед на Живо. Моля опитайте отново",
    "LIVE_DEVELOPMENT_INFO_TITLE"       : "Добре дошли в Преглед на Живо!",
    "LIVE_DEVELOPMENT_INFO_MESSAGE"     : "Преглед на Живо свърва {APP_NAME} с твоя браузър. Ще виждаш твоите HTML файлове в браузъра и ще виждаш промените, които ще натъпят в момента, в който промениш кода.<br /><br />В тази начална версия на  {APP_NAME}, Преглед на живо работи само с <strong>Google Chrome</strong> и се обновява в момента, в който променяш <strong>CSS или HTML файлове</strong>. Промените в JavaScript файловете автоматично се зареждат, когато ги запазиш.<br /><br />(Ще видиш това съобщение само веднъж.)",
    "LIVE_DEVELOPMENT_TROUBLESHOOTING"  : "За повече инфорамция, вижте <a href='{0}' title='{0}'>Проблеми и грешки при свързване на Преглед на Живо</a>.",
    
    "LIVE_DEV_STATUS_TIP_NOT_CONNECTED" : "Преглед на Живо",
    "LIVE_DEV_STATUS_TIP_PROGRESS1"     : "Преглед на Живо: Свързване\u2026",
    "LIVE_DEV_STATUS_TIP_PROGRESS2"     : "Преглед на Живо: Установяване на връзка\u2026",
    "LIVE_DEV_STATUS_TIP_CONNECTED"     : "Прекъсване на Преглед на Живо",
    "LIVE_DEV_STATUS_TIP_OUT_OF_SYNC"   : "Преглед на Живо (запази файла, за да обновиш)",
    "LIVE_DEV_STATUS_TIP_SYNC_ERROR"    : "Преглед на Живо (не се обновява, поради грешка в синтаксиса)",

    "LIVE_DEV_DETACHED_REPLACED_WITH_DEVTOOLS" : "Преглед на Живо беше затворен, защото инструментите за разработка на браузъра са отворени",
    "LIVE_DEV_DETACHED_TARGET_CLOSED"          : "Преглед на Живо беше затворен, защото страницата беше затворена в браузъра",
    "LIVE_DEV_NAVIGATED_AWAY"                  : "Преглед на Живо беше затворен, защото браузъра отвори страница, която не е че част от този проект",
    "LIVE_DEV_CLOSED_UNKNOWN_REASON"           : "Преглед на Живо беше затворен, поради неясни причини ({0})",
    
    "SAVE_CLOSE_TITLE"                  : "Запази промените",
    "SAVE_CLOSE_MESSAGE"                : "Искаш ли да запазиш промените в документ <span class='dialog-filename'>{0}</span>?",
    "SAVE_CLOSE_MULTI_MESSAGE"          : "Искаш ли да запазиш промените направени в следните файлове?",
    "EXT_MODIFIED_TITLE"                : "Външни промени",
    "CONFIRM_FOLDER_DELETE_TITLE"       : "Подтвърди изстриването",
    "CONFIRM_FOLDER_DELETE"             : "Сигурен ли си, че искаш да изстриеш папката <span class='dialog-filename'>{0}</span>?",
    "FILE_DELETED_TITLE"                : "Файла е изстрит",
    "EXT_MODIFIED_WARNING"              : "<span class='dialog-filename'>{0}</span> беше променен локално.<br /><br />Желете ли да запазите файла и да запишете промените?",
    "EXT_MODIFIED_MESSAGE"              : "<span class='dialog-filename'>{0}</span> беше променен локално, но има не запазени промени в {APP_NAME}.<br /><br />Коя версия желаете да запазите?",
    "EXT_DELETED_MESSAGE"               : "<span class='dialog-filename'>{0}</span> беше изстрит локално, но има незаписани промени {APP_NAME}.<br /><br />Желаете ли да запазите промените?",
    
    // Generic dialog/button labels
    "DONE"                              : "Готово",
    "OK"                                : "OK",
    "CANCEL"                            : "Откажи",
    "DONT_SAVE"                         : "Не записвай",
    "SAVE"                              : "Запиши",
    "SAVE_AS"                           : "Запиши като\u2026",
    "SAVE_AND_OVERWRITE"                : "Презапиши",
    "DELETE"                            : "Изстрий",
    "BUTTON_YES"                        : "Да",
    "BUTTON_NO"                         : "Не",
    
    // Find, Replace, Find in Files
    "FIND_MATCH_INDEX"                  : "{0} на {1}",
    "FIND_NO_RESULTS"                   : "Няма резултат",
    "FIND_QUERY_PLACEHOLDER"            : "Намери\u2026",
    "REPLACE_PLACEHOLDER"               : "Замести с\u2026",
    "BUTTON_REPLACE_ALL"                : "Batch\u2026",
    "BUTTON_REPLACE_ALL_IN_FILES"       : "Замести\u2026",
    "BUTTON_REPLACE"                    : "Замести",
    "BUTTON_NEXT"                       : "\u25B6",
    "BUTTON_PREV"                       : "\u25C0",
    "BUTTON_NEXT_HINT"                  : "Следващото съвпадение",
    "BUTTON_PREV_HINT"                  : "Предишно съвпадение",
    "BUTTON_CASESENSITIVE_HINT"         : "Съвпадения",
    "BUTTON_REGEXP_HINT"                : "Regular Expression",
    "REPLACE_WITHOUT_UNDO_WARNING_TITLE": "Замести без възможност за връщане обратно",
    "REPLACE_WITHOUT_UNDO_WARNING"      : "Понеже повече от  {0} трябва да бъдат променени, {APP_NAME} ще промени и неотворените файлове локално.<br />Няма да можете да върнете назад тези промени.",
    "BUTTON_REPLACE_WITHOUT_UNDO"       : "Замести без възможност за връщане обратно",

    "OPEN_FILE"                         : "Отворете файл",
    "SAVE_FILE_AS"                      : "Запишет файл",
    "CHOOSE_FOLDER"                     : "Изберете папка",

    "RELEASE_NOTES"                     : "Данни за версията",
    "NO_UPDATE_TITLE"                   : "Ползвате последната версия!",
    "NO_UPDATE_MESSAGE"                 : "Използвате последната версия на {APP_NAME}.",

    // Find and Replace
    "FIND_REPLACE_TITLE_LABEL"          : "Замени",
    "FIND_REPLACE_TITLE_WITH"           : "с",
    "FIND_TITLE_LABEL"                  : "Намери",
    "FIND_TITLE_SUMMARY"                : "&mdash; {0} {1} {2} в {3}",

    // Find in Files
    "FIND_NUM_FILES"                    : "{0} {1}",
    "FIND_IN_FILES_SCOPED"              : "в <span class='dialog-filename'>{0}</span>",
    "FIND_IN_FILES_NO_SCOPE"            : "в проект",
    "FIND_IN_FILES_ZERO_FILES"          : "Filter excludes all files {0}",
    "FIND_IN_FILES_FILE"                : "файл",
    "FIND_IN_FILES_FILES"               : "файлове",
    "FIND_IN_FILES_MATCH"               : "съвпадение",
    "FIND_IN_FILES_MATCHES"             : "съвпадения",
    "FIND_IN_FILES_MORE_THAN"           : "Над ",
    "FIND_IN_FILES_PAGING"              : "{0}&mdash;{1}",
    "FIND_IN_FILES_FILE_PATH"           : "<span class='dialog-filename'>{0}</span> {2} <span class='dialog-path'>{1}</span>", // We should use normal dashes on Windows instead of em dash eventually
    "FIND_IN_FILES_EXPAND_COLLAPSE"     : "Ctrl/Cmd натисни за да се отвори/прибере",
    "REPLACE_IN_FILES_ERRORS_TITLE"     : "Грешка при заместване",
    "REPLACE_IN_FILES_ERRORS"           : "Следните файлове не бяха модифицирани, защото бяха променени след търсенето или не са били записани.",
    
    "ERROR_FETCHING_UPDATE_INFO_TITLE"  : "Грешка при получаването на информация",
    "ERROR_FETCHING_UPDATE_INFO_MSG"    : " Възникна проблем при получаването на информация от сървъра. Моля уверете се, че сте свързани с интернет и опитайте отново.",
    
    // File exclusion filters
    "NEW_FILE_FILTER"                   : "Нови изключения\u2026",
    "CLEAR_FILE_FILTER"                 : "Неизклювай файлове",
    "NO_FILE_FILTER"                    : "Няма изключени файлове",
    "EXCLUDE_FILE_FILTER"               : "Изключи {0}",
    "EDIT_FILE_FILTER"                  : "Промени\u2026",
    "FILE_FILTER_DIALOG"                : "Промени изключенията",
    "FILE_FILTER_INSTRUCTIONS"          : "Изключи файлове и папки, които съвпдата със следните strings / substrings или <a href='{0}' title='{0}'>wildcards</a>. Напиши всеки string  на нов ред.",
    "FILTER_NAME_PLACEHOLDER"           : "Има на тази групя от изключения (по желание)",
    "FILE_FILTER_CLIPPED_SUFFIX"        : "и {0} повече",
    "FILTER_COUNTING_FILES"             : "Брой на файлове\u2026",
    "FILTER_FILE_COUNT"                 : "Позволи {0} на {1} файла {2}",
    "FILTER_FILE_COUNT_ALL"             : "Позволи всички {0} файла {1}",

    // Бърза Промяна
    "ERROR_QUICK_EDIT_PROVIDER_NOT_FOUND"   : "Бърза промяна не е възможна за тази позиция на курсоара",
    "ERROR_CSSQUICKEDIT_BETWEENCLASSES"     : "CSS Бърза Промяна: поставете курсоара точно върху името на класа",
    "ERROR_CSSQUICKEDIT_CLASSNOTFOUND"      : "CSS Бърза Промяна: непълни атрибути на класа",
    "ERROR_CSSQUICKEDIT_IDNOTFOUND"         : "CSS Бърза Промяна: непълни атрибути на id",
    "ERROR_CSSQUICKEDIT_UNSUPPORTEDATTR"    : "CSS Бърза Промяна: поставете курсоара върху таг, клас или id",
    "ERROR_TIMINGQUICKEDIT_INVALIDSYNTAX"   : "CSS Timing Function Бърза Промяна: невалиден синтаксис",
    "ERROR_JSQUICKEDIT_FUNCTIONNOTFOUND"    : "JS Бърза Промяна: поставете курсоара върху имаето на функцията",

    // Quick Docs
    "ERROR_QUICK_DOCS_PROVIDER_NOT_FOUND"   : "Quick Docs не е наличен за елемнта, върху който се намира курсоара",

    /**
     * ProjectManager
     */
    "PROJECT_LOADING"   : "Зареждане\u2026",
    "UNTITLED"          : "Неозаглавен",
    "WORKING_FILES"     : "Файлове, по които се работи",

    /**
     * MainViewManager
     */
    "TOP"               : "Отгоре",
    "BOTTOM"            : "Отдолу",
    "LEFT"              : "Ляво",
    "RIGHT"             : "Дясно",

    "CMD_SPLITVIEW_NONE"        : "Без разделяне",
    "CMD_SPLITVIEW_VERTICAL"    : "Вертикално разделяне",
    "CMD_SPLITVIEW_HORIZONTAL"  : "Хоризонтално разделяне",
    "SPLITVIEW_MENU_TOOLTIP"    : "Раздели редактора вертикално или хоризонтално",
    "GEAR_MENU_TOOLTIP"         : "Конфигурирай работния сет",

    "SPLITVIEW_INFO_TITLE"              : "Вече е отворен",
    "SPLITVIEW_MULTIPANE_WARNING"       : "Този файл вече е отворен в друг прозорец. {APP_NAME} скоро ще поддържа отваряне на един и същ файл в повече от един прозорец. До тогава, файлът ще се показва само в прозореца, в който вече е отворен. <br /><br />(Ще видите това съобщение само веднъж.)",

    /**
     * Keyboard modifier names
     */
    "KEYBOARD_CTRL"   : "Ctrl",
    "KEYBOARD_SHIFT"  : "Shift",
    "KEYBOARD_SPACE"  : "Space",
    
    /**
     * StatusBar strings
     */
    "STATUSBAR_CURSOR_POSITION"             : "Ред {0}, Колона {1}",
    "STATUSBAR_SELECTION_CH_SINGULAR"       : " \u2014 Избраната {0} колона",
    "STATUSBAR_SELECTION_CH_PLURAL"         : " \u2014 Избраните {0} колони",
    "STATUSBAR_SELECTION_LINE_SINGULAR"     : " \u2014 Избрания {0} ред",
    "STATUSBAR_SELECTION_LINE_PLURAL"       : " \u2014 Избраните {0} редове",
    "STATUSBAR_SELECTION_MULTIPLE"          : " \u2014 {0} селекция",
    "STATUSBAR_INDENT_TOOLTIP_SPACES"       : "Click to switch indentation to spaces",
    "STATUSBAR_INDENT_TOOLTIP_TABS"         : "Click to switch indentation to tabs",
    "STATUSBAR_INDENT_SIZE_TOOLTIP_SPACES"  : "Click to change number of spaces used when indenting",
    "STATUSBAR_INDENT_SIZE_TOOLTIP_TABS"    : "Click to change tab character width",
    "STATUSBAR_SPACES"                      : "Разстояния:",
    "STATUSBAR_TAB_SIZE"                    : "Големина на таба:",
    "STATUSBAR_LINE_COUNT_SINGULAR"         : "\u2014 {0} Ред",
    "STATUSBAR_LINE_COUNT_PLURAL"           : "\u2014 {0} Редове",
    "STATUSBAR_USER_EXTENSIONS_DISABLED"    : "Добавките са забранени",
    "STATUSBAR_INSERT"                      : "INS",
    "STATUSBAR_OVERWRITE"                   : "OVR",
    "STATUSBAR_INSOVR_TOOLTIP"              : "Click to toggle cursor between Insert (INS) and Overwrite (OVR) modes",
    "STATUSBAR_LANG_TOOLTIP"                : "Click to change file type",
    "STATUSBAR_CODE_INSPECTION_TOOLTIP"     : "{0}. Click to toggle report panel.",
    "STATUSBAR_DEFAULT_LANG"                : "(default)",
    "STATUSBAR_SET_DEFAULT_LANG"            : "Set as Default for .{0} Files",

    // CodeInspection: errors/warnings
    "ERRORS_PANEL_TITLE_MULTIPLE"           : "{0} Проблеми",
    "SINGLE_ERROR"                          : "1 {0} Проблем",
    "MULTIPLE_ERRORS"                       : "{1} {0} Проблеми",
    "NO_ERRORS"                             : "Няма {0} проблеми намерени - добра работа!",
    "NO_ERRORS_MULTIPLE_PROVIDER"           : "Без проблеми - добра работа!",
    "LINT_DISABLED"                         : "Linting is disabled",
    "NO_LINT_AVAILABLE"                     : "No linter available for {0}",
    "NOTHING_TO_LINT"                       : "Nothing to lint",
    "LINTER_TIMED_OUT"                      : "{0} has timed out after waiting for {1} ms",
    "LINTER_FAILED"                         : "{0} прекратено поради грешка: {1}",
    
    
    /**
     * Command Name Constants
     */
 
    // File menu commands
    "FILE_MENU"                           : "Файл",
    "CMD_FILE_NEW_UNTITLED"               : "Нов",
    "CMD_FILE_NEW"                        : "Нов файл",
    "CMD_FILE_NEW_FOLDER"                 : "Нова папка",
    "CMD_FILE_OPEN"                       : "Отвори\u2026",
    "CMD_ADD_TO_WORKING_SET"              : "Отвори в работния сет",
    "CMD_OPEN_DROPPED_FILES"              : "Отвори затворените файлове",
    "CMD_OPEN_FOLDER"                     : "Отвори папка\u2026",
    "CMD_FILE_CLOSE"                      : "Затвори",
    "CMD_FILE_CLOSE_ALL"                  : "Затвори всички",
    "CMD_FILE_CLOSE_LIST"                 : "Затвори списък",
    "CMD_FILE_CLOSE_OTHERS"               : "Затвори други",
    "CMD_FILE_CLOSE_ABOVE"                : "Затвори другите отгоре",
    "CMD_FILE_CLOSE_BELOW"                : "Затвори другите отдолу",
    "CMD_FILE_SAVE"                       : "Запази",
    "CMD_FILE_SAVE_ALL"                   : "Запази всички",
    "CMD_FILE_SAVE_AS"                    : "Запази като\u2026",
    "CMD_LIVE_FILE_PREVIEW"               : "Преглед на Живо",
    "CMD_RELOAD_LIVE_PREVIEW"             : "Незабавно презареждане на Преглед на Живо",
    "CMD_PROJECT_SETTINGS"                : "Настройки на проекта\u2026",
    "CMD_FILE_RENAME"                     : "Преименувай",
    "CMD_FILE_DELETE"                     : "Изстрий",
    "CMD_INSTALL_EXTENSION"               : "Инсталирай добавка\u2026",
    "CMD_EXTENSION_MANAGER"               : "Мениджър на добавките\u2026",
    "CMD_FILE_REFRESH"                    : "Обнови директорията с файлове",
    "CMD_QUIT"                            : "Излез",
    // Used in native File menu on Windows
    "CMD_EXIT"                            : "Изход",

    // Edit menu commands
    "EDIT_MENU"                           : "Промени",
    "CMD_UNDO"                            : "Отмени",
    "CMD_REDO"                            : "Върни",
    "CMD_CUT"                             : "Изрежи",
    "CMD_COPY"                            : "Копирай",
    "CMD_PASTE"                           : "Постави",
    "CMD_SELECT_ALL"                      : "Избери всички",
    "CMD_SELECT_LINE"                     : "Избери ред",
    "CMD_SPLIT_SEL_INTO_LINES"            : "Раздели избраното по редове",
    "CMD_ADD_CUR_TO_NEXT_LINE"            : "Премести курсоара на следвашия ред",
    "CMD_ADD_CUR_TO_PREV_LINE"            : "Премести курсоара на предния ред",
    "CMD_INDENT"                          : "Абзац",
    "CMD_UNINDENT"                        : "Открий",
    "CMD_DUPLICATE"                       : "Дублирай",
    "CMD_DELETE_LINES"                    : "Изстрий ред",
    "CMD_COMMENT"                         : "Toggle Line Comment",
    "CMD_BLOCK_COMMENT"                   : "Toggle Block Comment",
    "CMD_LINE_UP"                         : "Премести реда нагоре",
    "CMD_LINE_DOWN"                       : "Премести реда надолу",
    "CMD_OPEN_LINE_ABOVE"                 : "Отвори реда отгоре",
    "CMD_OPEN_LINE_BELOW"                 : "Отвори реда отдолу",
    "CMD_TOGGLE_CLOSE_BRACKETS"           : "Автоматично затваряне на скобите",
    "CMD_SHOW_CODE_HINTS"                 : "Покажи подсказка за кода",
    
    // Search menu commands
    "FIND_MENU"                           : "Намери",
    "CMD_FIND"                            : "Намери",
    "CMD_FIND_NEXT"                       : "Намери следвашия",
    "CMD_FIND_PREVIOUS"                   : "Намери предния",
    "CMD_FIND_ALL_AND_SELECT"             : "Намери всички и избери",
    "CMD_ADD_NEXT_MATCH"                  : "Добави следващото съвпадение към избраното",
    "CMD_SKIP_CURRENT_MATCH"              : "Прескочи и добави следващото съвпадениеS",
    "CMD_FIND_IN_FILES"                   : "Намери във файловете",
    "CMD_FIND_IN_SELECTED"                : "Намери в избрания Файл/Папка",
    "CMD_FIND_IN_SUBTREE"                 : "Намери в\u2026",
    "CMD_REPLACE"                         : "Замени",
    "CMD_REPLACE_IN_FILES"                : "Замени във файла",
    "CMD_REPLACE_IN_SELECTED"             : "Замени в избрания Файл/Папка",
    "CMD_REPLACE_IN_SUBTREE"              : "Замени в\u2026",
    
    // View menu commands
    "VIEW_MENU"                           : "Изглед",
    "CMD_HIDE_SIDEBAR"                    : "Скрий Сайтбар",
    "CMD_SHOW_SIDEBAR"                    : "Покажи Сайтбар",
    "CMD_INCREASE_FONT_SIZE"              : "Уголеми шрифта",
    "CMD_DECREASE_FONT_SIZE"              : "Намали шрифта",
    "CMD_RESTORE_FONT_SIZE"               : "Възстанови шрифта",
    "CMD_SCROLL_LINE_UP"                  : "Премести с ред нагоре",
    "CMD_SCROLL_LINE_DOWN"                : "Премести с ред надолу",
    "CMD_TOGGLE_LINE_NUMBERS"             : "Номер на реда",
    "CMD_TOGGLE_ACTIVE_LINE"              : "Покажи активния ред",
    "CMD_TOGGLE_WORD_WRAP"                : "Word Wrap",
    "CMD_LIVE_HIGHLIGHT"                  : "Преглед на Живо Highlight",
    "CMD_VIEW_TOGGLE_INSPECTION"          : "Lint Files on Save",
    "CMD_WORKINGSET_SORT_BY_ADDED"        : "Подреди по добавен",
    "CMD_WORKINGSET_SORT_BY_NAME"         : "Подреди по име",
    "CMD_WORKINGSET_SORT_BY_TYPE"         : "Подреди по вид",
    "CMD_WORKING_SORT_TOGGLE_AUTO"        : "Автоматична подредба",
    "CMD_THEMES"                          : "Външен вид\u2026",

    // Navigate menu Commands
    "NAVIGATE_MENU"                       : "Навигация",
    "CMD_QUICK_OPEN"                      : "Бързо отваряне",
    "CMD_GOTO_LINE"                       : "Отиди на ред",
    "CMD_GOTO_DEFINITION"                 : "Бързо намиране на дефиниция",
    "CMD_GOTO_FIRST_PROBLEM"              : "Отиди на първата грешка/предупреждение",
    "CMD_TOGGLE_QUICK_EDIT"               : "Бърза Промяна",
    "CMD_TOGGLE_QUICK_DOCS"               : "Quick Docs",
    "CMD_QUICK_EDIT_PREV_MATCH"           : "Предишно съвпадение",
    "CMD_QUICK_EDIT_NEXT_MATCH"           : "Следващо съвпадение",
    "CMD_CSS_QUICK_EDIT_NEW_RULE"         : "Ново правило",
    "CMD_NEXT_DOC"                        : "Следващ документ",
    "CMD_PREV_DOC"                        : "Предишен документ",
    "CMD_SHOW_IN_TREE"                    : "Покажи структурата на файловете",
    "CMD_SHOW_IN_EXPLORER"                : "Покажи в Explrer",
    "CMD_SHOW_IN_FINDER"                  : "Покажи в Finder",
    "CMD_SHOW_IN_OS"                      : "Покажи в OS",
    
    // Help menu commands
    "HELP_MENU"                           : "Помощ",
    "CMD_CHECK_FOR_UPDATE"                : "Провери за обновления",
    "CMD_HOW_TO_USE_BRACKETS"             : "Как да използваме {APP_NAME}",
    "CMD_SUPPORT"                         : "{APP_NAME} Подръжка",
    "CMD_SUGGEST"                         : "Предложения",
    "CMD_RELEASE_NOTES"                   : "Бележки за версията",
    "CMD_GET_INVOLVED"                    : "Включи се",
    "CMD_SHOW_EXTENSIONS_FOLDER"          : "Покажи папката за добавки",
    "CMD_HOMEPAGE"                        : "{APP_TITLE} Начална страница",
    "CMD_TWITTER"                         : "{TWITTER_NAME} в Twitter",
    "CMD_ABOUT"                           : "За {APP_TITLE}",
    "CMD_OPEN_PREFERENCES"                : "Отвори файл с настройки",
    "CMD_OPEN_KEYMAP"                     : "Отвори User Key Map",

    // Strings for main-view.html
    "EXPERIMENTAL_BUILD"                   : "experimental build",
    "RELEASE_BUILD"                        : "build",
    "DEVELOPMENT_BUILD"                    : "development build",
    "RELOAD_FROM_DISK"                     : "Reload from Disk",
    "KEEP_CHANGES_IN_EDITOR"               : "Keep Changes in Editor",
    "CLOSE_DONT_SAVE"                      : "Close (Don't Save)",
    "RELAUNCH_CHROME"                      : "Relaunch Chrome",
    "ABOUT"                                : "About",
    "CLOSE"                                : "Close",
    "ABOUT_TEXT_LINE1"                     : "Release {VERSION_MAJOR}.{VERSION_MINOR} {BUILD_TYPE} {VERSION}",
    "ABOUT_TEXT_BUILD_TIMESTAMP"           : "build timestamp: ",
    "ABOUT_TEXT_LINE3"                     : "Notices, terms and conditions pertaining to third party software are located at <a href='{ADOBE_THIRD_PARTY}'>{ADOBE_THIRD_PARTY}</a> and incorporated by reference herein.",
    "ABOUT_TEXT_LINE4"                     : "Documentation and source at <a href='https://github.com/adobe/brackets/'>https://github.com/adobe/brackets/</a>",
    "ABOUT_TEXT_LINE5"                     : "Made with \u2764 and JavaScript by:",
    "ABOUT_TEXT_LINE6"                     : "Lots of people (but we're having trouble loading that data right now).",
    "ABOUT_TEXT_WEB_PLATFORM_DOCS"         : "Web Platform Docs and the Web Platform graphical logo are licensed under a Creative Commons Attribution license, <a href='{WEB_PLATFORM_DOCS_LICENSE}'>CC-BY 3.0 Unported</a>.",
    "UPDATE_NOTIFICATION_TOOLTIP"          : "There's a new build of {APP_NAME} available! Click here for details.",
    "UPDATE_AVAILABLE_TITLE"               : "Update Available",
    "UPDATE_MESSAGE"                       : "Hey, there's a new build of {APP_NAME} available. Here are some of the new features:",
    "GET_IT_NOW"                           : "Get it now!",
    "PROJECT_SETTINGS_TITLE"               : "Project Settings for: {0}",
    "PROJECT_SETTING_BASE_URL"             : "Преглед на Живо Base URL",
    "PROJECT_SETTING_BASE_URL_HINT"        : "To use a local server, enter a url like http://localhost:8000/",
    "BASEURL_ERROR_INVALID_PROTOCOL"       : "The {0} protocol isn't supported by Преглед на Живо&mdash;please use http: or https: .",
    "BASEURL_ERROR_SEARCH_DISALLOWED"      : "The base URL can't contain search parameters like \"{0}\".",
    "BASEURL_ERROR_HASH_DISALLOWED"        : "The base URL can't contain hashes like \"{0}\".",
    "BASEURL_ERROR_INVALID_CHAR"           : "Special characters like '{0}' must be %-encoded.",
    "BASEURL_ERROR_UNKNOWN_ERROR"          : "Unknown error parsing Base URL",
    "EMPTY_VIEW_HEADER"                    : "<em>Open a file while this pane has focus</em>",
    
    // Strings for themes-settings.html and themes-general.html
    "CURRENT_THEME"                        : "Current Theme",
    "USE_THEME_SCROLLBARS"                 : "Use Theme Scrollbars",
    "FONT_SIZE"                            : "Font Size",
    "FONT_FAMILY"                          : "Font Family",
    "THEMES_SETTINGS"                      : "Themes Settings",

    // CSS Бърза Промяна
    "BUTTON_NEW_RULE"                      : "New Rule",
    
    // Extension Management strings
    "INSTALL"                              : "Install",
    "UPDATE"                               : "Update",
    "REMOVE"                               : "Remove",
    "OVERWRITE"                            : "Overwrite",
    "CANT_REMOVE_DEV"                      : "Extensions in the \"dev\" folder must be manually deleted.",
    "CANT_UPDATE"                          : "The update isn't compatible with this version of {APP_NAME}.",
    "CANT_UPDATE_DEV"                      : "Extensions in the \"dev\" folder can't be updated automatically.",
    "INSTALL_EXTENSION_TITLE"              : "Install Extension",
    "UPDATE_EXTENSION_TITLE"               : "Update Extension",
    "INSTALL_EXTENSION_LABEL"              : "Extension URL",
    "INSTALL_EXTENSION_HINT"               : "URL of the extension's zip file or GitHub repo",
    "INSTALLING_FROM"                      : "Installing extension from {0}\u2026",
    "INSTALL_SUCCEEDED"                    : "Installation successful!",
    "INSTALL_FAILED"                       : "Installation failed.",
    "CANCELING_INSTALL"                    : "Canceling\u2026",
    "CANCELING_HUNG"                       : "Canceling the install is taking a long time. An internal error may have occurred.",
    "INSTALL_CANCELED"                     : "Installation canceled.",
    "VIEW_COMPLETE_DESCRIPTION"            : "View complete description",
    "VIEW_TRUNCATED_DESCRIPTION"           : "View truncated description",
    // These must match the error codes in ExtensionsDomain.Errors.* :
    "INVALID_ZIP_FILE"                     : "The downloaded content is not a valid zip file.",
    "INVALID_PACKAGE_JSON"                 : "The package.json file is not valid (error was: {0}).",
    "MISSING_PACKAGE_NAME"                 : "The package.json file doesn't specify a package name.",
    "BAD_PACKAGE_NAME"                     : "{0} is an invalid package name.",
    "MISSING_PACKAGE_VERSION"              : "The package.json file doesn't specify a package version.",
    "INVALID_VERSION_NUMBER"               : "The package version number ({0}) is invalid.",
    "INVALID_BRACKETS_VERSION"             : "The {APP_NAME} compatibility string ({0}) is invalid.",
    "DISALLOWED_WORDS"                     : "The words ({1}) are not allowed in the {0} field.",
    "API_NOT_COMPATIBLE"                   : "The extension isn't compatible with this version of {APP_NAME}. It's installed in your disabled extensions folder.",
    "MISSING_MAIN"                         : "The package has no main.js file.",
    "EXTENSION_ALREADY_INSTALLED"          : "Installing this package will overwrite a previously installed extension. Overwrite the old extension?",
    "EXTENSION_SAME_VERSION"               : "This package is the same version as the one that is currently installed. Overwrite the existing installation?",
    "EXTENSION_OLDER_VERSION"              : "This package is version {0} which is older than the currently installed ({1}). Overwrite the existing installation?",
    "DOWNLOAD_ID_IN_USE"                   : "Internal error: download ID already in use.",
    "NO_SERVER_RESPONSE"                   : "Cannot connect to server.",
    "BAD_HTTP_STATUS"                      : "File not found on server (HTTP {0}).",
    "CANNOT_WRITE_TEMP"                    : "Unable to save download to temp file.",
    "ERROR_LOADING"                        : "The extension encountered an error while starting up.",
    "MALFORMED_URL"                        : "The URL is invalid. Please check that you entered it correctly.",
    "UNSUPPORTED_PROTOCOL"                 : "The URL must be an http or https URL.",
    "UNKNOWN_ERROR"                        : "Unknown internal error.",
    // For NOT_FOUND_ERR, see generic strings above
    "EXTENSION_MANAGER_TITLE"              : "Extension Manager",
    "EXTENSION_MANAGER_ERROR_LOAD"         : "Unable to access the extension registry. Please try again later.",
    "INSTALL_EXTENSION_DRAG"               : "Drag .zip here or",
    "INSTALL_EXTENSION_DROP"               : "Drop .zip to install",
    "INSTALL_EXTENSION_DROP_ERROR"         : "Install/Update aborted due to the following errors:",
    "INSTALL_FROM_URL"                     : "Install from URL\u2026",
    "INSTALL_EXTENSION_VALIDATING"         : "Validating\u2026",
    "EXTENSION_AUTHOR"                     : "Author",
    "EXTENSION_DATE"                       : "Date",
    "EXTENSION_INCOMPATIBLE_NEWER"         : "This extension requires a newer version of {APP_NAME}.",
    "EXTENSION_INCOMPATIBLE_OLDER"         : "This extension currently only works with older versions of {APP_NAME}.",
    "EXTENSION_LATEST_INCOMPATIBLE_NEWER"  : "Version {0} of this extension requires a newer version of {APP_NAME}. But you can install the earlier version {1}.",
    "EXTENSION_LATEST_INCOMPATIBLE_OLDER"  : "Version {0} of this extension only works with older versions of {APP_NAME}. But you can install the earlier version {1}.",
    "EXTENSION_NO_DESCRIPTION"             : "No description",
    "EXTENSION_MORE_INFO"                  : "More info...",
    "EXTENSION_ERROR"                      : "Extension error",
    "EXTENSION_KEYWORDS"                   : "Keywords",
    "EXTENSION_TRANSLATED_USER_LANG"       : "Translated into {0} languages, including yours",
    "EXTENSION_TRANSLATED_GENERAL"         : "Translated into {0} languages",
    "EXTENSION_TRANSLATED_LANGS"           : "This extension has been translated into these languages: {0}",
    "EXTENSION_INSTALLED"                  : "Installed",
    "EXTENSION_UPDATE_INSTALLED"           : "This extension update has been downloaded and will be installed after {APP_NAME} reloads.",
    "EXTENSION_SEARCH_PLACEHOLDER"         : "Search",
    "EXTENSION_MORE_INFO_LINK"             : "More",
    "BROWSE_EXTENSIONS"                    : "Browse Extensions",
    "EXTENSION_MANAGER_REMOVE"             : "Remove Extension",
    "EXTENSION_MANAGER_REMOVE_ERROR"       : "Unable to remove one or more extensions: {0}. {APP_NAME} will still reload.",
    "EXTENSION_MANAGER_UPDATE"             : "Update Extension",
    "EXTENSION_MANAGER_UPDATE_ERROR"       : "Unable to update one or more extensions: {0}. {APP_NAME} will still reload.",
    "MARKED_FOR_REMOVAL"                   : "Marked for removal",
    "UNDO_REMOVE"                          : "Undo",
    "MARKED_FOR_UPDATE"                    : "Marked for update",
    "UNDO_UPDATE"                          : "Undo",
    "CHANGE_AND_RELOAD_TITLE"              : "Change Extensions",
    "CHANGE_AND_RELOAD_MESSAGE"            : "To update or remove the marked extensions, {APP_NAME} will need to reload. You'll be prompted to save unsaved changes.",
    "REMOVE_AND_RELOAD"                    : "Премахни добавката и презареди",
    "CHANGE_AND_RELOAD"                    : "Промени добавката и презареди",
    "UPDATE_AND_RELOAD"                    : "Обнови добавката и презареди",
    "PROCESSING_EXTENSIONS"                : "Processing extension changes\u2026",
    "EXTENSION_NOT_INSTALLED"              : "Не може да премахне добавката,  {0} защото не е била инсталирана.",
    "NO_EXTENSIONS"                        : "Няма инсталирани добавки.<br>Натиснете върху активните табове отдолу за да започнете.",
    "NO_EXTENSION_MATCHES"                 : "Няма добавки, които да съвпадат с вашето търсене.",
    "REGISTRY_SANITY_CHECK_WARNING"        : "ЗАБЕЛЕЖКА: Тези добавки, може би идват от разработчик различен от {APP_NAME}. Добавките не са тествани и имат пълни права за достъп. Бъдете внимателни, когато инсталирате добавки от неизвестен източник.",
    "EXTENSIONS_INSTALLED_TITLE"           : "Инсталирани",
    "EXTENSIONS_AVAILABLE_TITLE"           : "Налични",
    "EXTENSIONS_THEMES_TITLE"              : "Външен вид",
    "EXTENSIONS_UPDATES_TITLE"             : "Обновления",
    
    "INLINE_EDITOR_NO_MATCHES"             : "No matches available.",
    "INLINE_EDITOR_HIDDEN_MATCHES"         : "All matches are collapsed. Expand the files listed at right to view matches.",
    "CSS_QUICK_EDIT_NO_MATCHES"            : "There are no existing CSS rules that match your selection.<br> Click \"New Rule\" to create one.",
    "CSS_QUICK_EDIT_NO_STYLESHEETS"        : "There are no stylesheets in your project.<br>Create one to add CSS rules.",

    // Custom Viewers
    "IMAGE_VIEWER_LARGEST_ICON"            : "по-големи",
    
    /**
     * Unit names
     */

    "UNIT_PIXELS"                          : "pixels",

    // extensions/default/DebugCommands
    "DEBUG_MENU"                                : "Debug",
    "ERRORS"                                    : "Грешки",
    "CMD_SHOW_DEV_TOOLS"                        : "Покажи инструментите за разработка",
    "CMD_REFRESH_WINDOW"                        : "Презареди с добавките",
    "CMD_RELOAD_WITHOUT_USER_EXTS"              : "Презаредии без добавките",
    "CMD_NEW_BRACKETS_WINDOW"                   : "Нов {APP_NAME} Прозорец",
    "CMD_SWITCH_LANGUAGE"                       : "Смени езика",
    "CMD_RUN_UNIT_TESTS"                        : "Започни тестове",
    "CMD_SHOW_PERF_DATA"                        : "Show Performance Data",
    "CMD_ENABLE_NODE_DEBUGGER"                  : "Разреши Node Debugger",
    "CMD_LOG_NODE_STATE"                        : "Log Node State to Console",
    "CMD_RESTART_NODE"                          : "Рестартирай Node",
    "CMD_SHOW_ERRORS_IN_STATUS_BAR"             : "Покажи грешките в статус бара",
    "CMD_OPEN_BRACKETS_SOURCE"                  : "Open Brackets Source",
    
    "LANGUAGE_TITLE"                            : "Смени езика",
    "LANGUAGE_MESSAGE"                          : "Език:",
    "LANGUAGE_SUBMIT"                           : "Презареждане {APP_NAME}",
    "LANGUAGE_CANCEL"                           : "Откажи",
    "LANGUAGE_SYSTEM_DEFAULT"                   : "По подразбиране",
    
    // extensions/default/InlineTimingFunctionEditor
    "INLINE_TIMING_EDITOR_TIME"                 : "Време",
    "INLINE_TIMING_EDITOR_PROGRESSION"          : "Progression",
    "BEZIER_EDITOR_INFO"                        : "<kbd>↑</kbd><kbd>↓</kbd><kbd>←</kbd><kbd>→</kbd> Move selected point<br><kbd class='text'>Shift</kbd> Move by ten units<br><kbd class='text'>Tab</kbd> Switch points",
    "STEPS_EDITOR_INFO"                         : "<kbd>↑</kbd><kbd>↓</kbd> Increase or decrease steps<br><kbd>←</kbd><kbd>→</kbd> 'Start' or 'End'",
    "INLINE_TIMING_EDITOR_INVALID"              : "The old value <code>{0}</code> is not valid, so the displayed function was changed to <code>{1}</code>. The document will be updated with the first edit.",
    
    // extensions/default/InlineColorEditor
    "COLOR_EDITOR_CURRENT_COLOR_SWATCH_TIP"     : "Сегашен цвят",
    "COLOR_EDITOR_ORIGINAL_COLOR_SWATCH_TIP"    : "Оригинален цвят",
    "COLOR_EDITOR_RGBA_BUTTON_TIP"              : "RGBa Format",
    "COLOR_EDITOR_HEX_BUTTON_TIP"               : "Hex Format",
    "COLOR_EDITOR_HSLA_BUTTON_TIP"              : "HSLa Format",
    "COLOR_EDITOR_USED_COLOR_TIP_SINGULAR"      : "{0} (Used {1} time)",
    "COLOR_EDITOR_USED_COLOR_TIP_PLURAL"        : "{0} (Used {1} times)",
    
    // extensions/default/JavaScriptCodeHints
    "CMD_JUMPTO_DEFINITION"                     : "Jump to Definition",
    "CMD_SHOW_PARAMETER_HINT"                   : "Show Parameter Hint",
    "NO_ARGUMENTS"                              : "<no parameters>",
    "DETECTED_EXCLUSION_TITLE"                  : "JavaScript File Inference Problem",
    "DETECTED_EXCLUSION_INFO"                   : "Brackets ran into trouble processing <span class='dialog-filename'>{0}</span>.<br><br>This file will no longer be processed for code hints, Jump to Definition or Бърза Промяна. To reenable this file, open <code>.brackets.json</code> in your project and edit <code>jscodehints.detectedExclusions</code>.<br><br>This is likely a Brackets bug. If you can provide a copy of this file, please <a href='https://github.com/adobe/brackets/wiki/How-to-Report-an-Issue'>file a bug</a> with a link to the file named here.",
    
    // extensions/default/JSLint
    "JSLINT_NAME"                               : "JSLint",
    
    // extensions/default/QuickView
    "CMD_ENABLE_QUICK_VIEW"                     : "Quick View on Hover",
    
    // extensions/default/RecentProjects
    "CMD_TOGGLE_RECENT_PROJECTS"                : "Последни проекти",
    
    // extensions/default/WebPlatformDocs
    "DOCS_MORE_LINK"                            : "Прочети повече"

    /* Last translated for 0a0f6031fc2c2ea574fffc749ae4cff8f7f48509 */