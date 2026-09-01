# -*- coding: utf-8 -*-
import io

def read(p):
    return io.open(p, encoding='utf-8').read()

HEAD = read('_parts_head.html')
PROFILE = read('_parts_profile.html')
TAIL = read('_parts_tail.html')

CHEV_DOWN = ('<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#9DA2A9" '
             'stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" '
             'style="display: block; flex-shrink: 0;"><path d="M5 7 L9 11 L13 7"></path></svg>')
CHEV_UP = ('<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#5A6069" '
           'stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" '
           'style="display: block; flex-shrink: 0;"><path d="M5 11 L9 7 L13 11"></path></svg>')

FLIPIA_ICON = ('<svg width="56" height="56" viewBox="0 0 56 56" style="display: block; flex-shrink: 0;">'
               '<rect width="56" height="56" rx="13" fill="#3B2C52"></rect>'
               '<rect x="13" y="15" width="17" height="23" rx="4" fill="#F2F0EC"></rect>'
               '<rect x="27" y="20" width="17" height="23" rx="4" fill="#E9C46A"></rect></svg>')

PROJECTS = [
    dict(key='mitsitsy', name='Mitsitsy', status=None,
         icon='<img src="icon-mitsitsy.png" alt="" width="56" height="56" style="display: block; flex-shrink: 0; border-radius: 13px;">',
         desc="Budget and expense tracker built for Madagascar. Log a spend in under ten seconds, and it all works with no connection.",
         attrs=['Android', 'Offline', 'Ariary, euro, dollar']),
    dict(key='clearway', name='Clearway', status=None,
         icon='<img src="icon-clearway.png" alt="" width="56" height="56" style="display: block; flex-shrink: 0; border-radius: 13px;">',
         desc="A calm companion for quitting vaping. Progress, money saved and guided breathing for the hard moments. No lectures.",
         attrs=['Android', 'No account', 'Data stays local']),
    dict(key='flipia', name='Flipia', status=None,
         icon='<img src="icon-flipia.png" alt="" width="56" height="56" style="display: block; flex-shrink: 0; border-radius: 13px;">',
         desc="Memory game turned duel. Flip the cards, find the pairs before your opponent, and trigger powers to break their rhythm.",
         attrs=['Android', 'Solo and duels', 'Leaderboard']),
    dict(key='monstercannon', name='Monster Cannon', status='soon',
         icon='<img src="icon-monstercannon.png" alt="" width="56" height="56" style="display: block; flex-shrink: 0; border-radius: 13px;">',
         desc="Arcade game. Load the cannon, set the angle, let the bounces do the rest. Endless waves, five bosses, roguelike upgrades drawn between rounds.",
         attrs=['Android', 'Offline', 'No ads']),
]

PLAY_BUTTON = ('<a href="#" style="display: inline-flex; align-items: center; justify-content: center; '
               'height: 46px; padding: 0 22px; background: #16181C; color: #FAFAF8; font-size: 15px; '
               'font-weight: 500; border-radius: 8px;">Get it on Google Play</a>')

SOON_NOTE = ('<span style="font-size: 14px; color: #8B9098;">Not on Google Play yet.</span>')

EXPANSION = {
    'monstercannon': dict(
        shots=['shot-monstercannon-%d.jpg' % i for i in range(1, 5)],
        action=SOON_NOTE,
        links=['Game site'],
        about="Aim, bounce, destroy. You load the cannon and set the angle; the trajectory line shows where the shot will land after the bounces. Waves never stop, and every round hands you a choice of upgrades.",
        bullets=["Five bosses, each with a mechanic of its own.",
                 "Roguelike upgrades drawn between waves.",
                 "Permanent upgrades bought with gold in the lab.",
                 "Plays offline, no forced ads, no in-app purchases."]),
    'mitsitsy': dict(
        shots=['shot-mitsitsy-%d.jpg' % i for i in range(1, 5)],
        action=PLAY_BUTTON,
        links=['mitsitsy.app', 'Privacy policy'],
        about="A budget and expense tracker built for how money actually works in Madagascar. Log a spend in under ten seconds, in ariary, with no connection and no account.",
        bullets=["An expense takes under ten seconds to record.",
                 "Fully offline \u2014 everything stays on the device.",
                 "Ariary, euro and dollar side by side.",
                 "Budgets with deadlines, and charts to see where it went."]),
    'clearway': dict(
        shots=['shot-clearway-%d.jpg' % i for i in range(1, 5)],
        action=PLAY_BUTTON,
        links=['Site', 'Privacy policy'],
        about="A calm companion for quitting vaping, not a coach shouting at you. It counts the days you have cleared, the money back in your pocket, and gives you something to do when a craving hits.",
        bullets=["Guided 4-7-8 breathing for the hard moments.",
                 "Money saved, counted as it goes.",
                 "A home screen widget, so progress shows without opening it.",
                 "No account, and the data stays on the phone."]),
    'flipia': dict(
        shots=['shot-flipia-%d.jpg' % i for i in range(1, 5)],
        action=PLAY_BUTTON,
        links=['Privacy policy'],
        about="A memory game turned into a duel. Match the pairs faster than your opponent, and spend powers to scramble the board when you fall behind.",
        bullets=["Duels against other players or bots.",
                 "Powers that change the board mid-game.",
                 "Leaderboard by XP, win rate and rank.",
                 "Several modes, offline play included."]),
}


def attrs_html(attrs, color='#9DA2A9'):
    spans = ''.join('<span>%s</span>' % a for a in attrs)
    return ('<div style="display: flex; flex-wrap: wrap; gap: 14px; font-size: 12.5px; '
            'color: %s; margin-top: 2px;">%s</div>' % (color, spans))


def head_row(p, open_):
    right = []
    if p['status']:
        right.append('<span style="font-size: 13px; color: #8B9098; flex-shrink: 0;">%s</span>' % p['status'])
    right.append(CHEV_UP if open_ else CHEV_DOWN)
    name_style = 'font-size: 16px; font-weight: 500; color: #16181C;'
    if open_:
        name_style += ' text-decoration: underline; text-decoration-color: #1D4E89; text-underline-offset: 3px;'
    return """      <div style="display: flex; gap: 14px; align-items: flex-start;">
        %s
        <div style="display: flex; flex-direction: column; gap: 6px; padding-top: 2px; flex-grow: 1;">
          <div style="display: flex; justify-content: space-between; align-items: center; gap: 16px;">
            <span style="%s">%s</span>
            <div style="display: flex; align-items: center; gap: 12px;">%s</div>
          </div>
          <span style="font-size: 14px; line-height: 1.5; color: #5A6069; text-wrap: pretty;">%s</span>
          %s
        </div>
      </div>""" % (p['icon'], name_style, p['name'], ''.join(right), p['desc'], attrs_html(p['attrs']))


def expansion_html(key):
    e = EXPANSION[key]
    shots = ''.join(
        '<img src="%s" alt="" style="display: block; flex-shrink: 0; width: 148px; '
        'border-radius: 10px; border: 1px solid #DDDCD6;">' % s for s in e['shots'])
    links = ''.join(
        '<a href="#" style="font-size: 14px; color: #5A6069; text-decoration: underline; '
        'text-decoration-color: #C4C7CC; text-underline-offset: 3px;">%s</a>' % l for l in e['links'])
    bullets = ''.join(
        '<p style="margin: 0; font-size: 14px; line-height: 1.5; color: #5A6069;">%s</p>' % b
        for b in e['bullets'])
    return """
      <div style="display: flex; flex-direction: column; gap: 18px; padding-top: 4px;">
        <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 20px;">
          %s
          %s
        </div>
        <div style="display: flex; gap: 12px; overflow-x: auto; padding: 0 12px 4px; margin: 0 -12px;">%s</div>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #33373D; text-wrap: pretty;">%s</p>
          <div style="display: flex; flex-direction: column; gap: 8px;">%s</div>
        </div>
      </div>""" % (e['action'], links, shots, e['about'], bullets)


def row(p, open_):
    bg = ' background: #F1F0EC; border-radius: 10px;' if open_ else ''
    inner = head_row(p, open_)
    if open_:
        inner += expansion_html(p['key'])
    return ("""      <div style="display: flex; flex-direction: column; padding: 12px; margin: -12px;%s">
%s
      </div>""" % (bg, inner))


def build(open_key, min_height, width=680, pad='64px 40px 48px'):
    rows = '\n\n'.join(row(p, p['key'] == open_key) for p in PROJECTS)
    body = """
<div style="width: %dpx; min-height: %dpx; box-sizing: border-box; background: #FAFAF8; padding: %s; display: flex; justify-content: center; font-family: 'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif; -webkit-font-smoothing: antialiased;">
  <div style="width: 100%%; max-width: 600px; display: flex; flex-direction: column; gap: 34px;">

%s

    <div style="display: flex; flex-direction: column; gap: 26px;">

%s

""" % (width, min_height, pad, PROFILE, rows)
    return HEAD + body + TAIL


io.open('Main.dc.html', 'w', encoding='utf-8').write(build(None, 1520))
io.open('OpenSoon.dc.html', 'w', encoding='utf-8').write(build('monstercannon', 2040))
io.open('Expanded.dc.html', 'w', encoding='utf-8').write(build('mitsitsy', 2040))
io.open('Mobile.dc.html', 'w', encoding='utf-8').write(
    build('mitsitsy', 2320, width=390, pad='44px 24px 40px'))
print('Main / Expanded / Mobile generes')
