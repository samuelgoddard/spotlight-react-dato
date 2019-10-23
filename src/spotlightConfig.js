// Spotlight Config file
// this is where you edit the configuration of this specific spotlight site

import { faClock, faTruck, faCoffee, faThumbsUp, faCheckSquare, faNewspaper } from "@fortawesome/free-solid-svg-icons"

// Process Array
export const process = [
  {
    icon: faClock, 
    title: 'Whether it’s a chip or a crack, we’ve got you covered.',
    blurb: 'Whether it’s a chip or a crack, we’ve got you covered.',
    btn: true
  },
  {
    seperator: true
  },{
    icon: faTruck,
    title: 'Repair or replacement at a time and place to suit you.',
    blurb: 'Repair or replacement at a time and place to suit you.',
    btn: false
  },
  {
    seperator: true
  },{
    icon: faCoffee,
    title: 'Insurance approved windscreen repairs and replacements.',
    blurb: 'Insurance approved windscreen repairs and replacements.',
    btn: false
  },
]

// Buckets Array
export const buckets = [
  {
    icon: faThumbsUp,
    title: 'Whether it’s a chip or a crack, we’ve got you covered.' 
  },{
    icon: faClock,
    title: 'Repair or replacement at a time and place to suit you.'
  },{
    icon: faCheckSquare,
    title: 'Insurance approved windscreen repairs and replacements.'
  },{
    icon: faNewspaper,
    title: 'We complete all admin with your insurers to save you time.'
  }
]