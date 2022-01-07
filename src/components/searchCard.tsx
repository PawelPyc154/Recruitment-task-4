import axios from 'axios'
import { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { FiCheck } from 'react-icons/fi'
import { useQuery } from 'react-query'
import { PlaylistItem } from '../models/playlistItem'
import ButtonIcon from './base/buttonIcon'
import { Card } from './base/card'
import { Input } from './base/input'
import { List } from './list'
import 'twin.macro'

const data2 = [
  {
    id: 1542795122,
    readable: true,
    title: 'IGI OS\u00c8 BAOB\u00c1',
    title_short: 'IGI OS\u00c8 BAOB\u00c1',
    title_version: '',
    link: 'https://www.deezer.com/track/1542795122',
    duration: 346,
    rank: 487695,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-0.dzcdn.net/stream/c-0fffd644e60f7508e20314a61aa70948-3.mp3',
    md5_image: '0fecd20a591de2bfa18d152fa9b82702',
    artist: {
      id: 202701,
      name: 'Gilsinho',
      link: 'https://www.deezer.com/artist/202701',
      picture: 'https://api.deezer.com/artist/202701/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/1000x1000-000000-80-0-0.jpg',
      tracklist: 'https://api.deezer.com/artist/202701/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 270455252,
      title: 'Rio Carnaval 2022',
      cover: 'https://api.deezer.com/album/270455252/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/0fecd20a591de2bfa18d152fa9b82702/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/0fecd20a591de2bfa18d152fa9b82702/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/0fecd20a591de2bfa18d152fa9b82702/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/0fecd20a591de2bfa18d152fa9b82702/1000x1000-000000-80-0-0.jpg',
      md5_image: '0fecd20a591de2bfa18d152fa9b82702',
      tracklist: 'https://api.deezer.com/album/270455252/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 1531383272,
    readable: true,
    title: 'IGI OS\u00c8 BAOB\u00c1',
    title_short: 'IGI OS\u00c8 BAOB\u00c1',
    title_version: '',
    link: 'https://www.deezer.com/track/1531383272',
    duration: 345,
    rank: 365906,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-6014ac6e16a95e777d980a86cf635b1c-3.mp3',
    md5_image: '2e33f730851c023079abb853c5918028',
    artist: {
      id: 202701,
      name: 'Gilsinho',
      link: 'https://www.deezer.com/artist/202701',
      picture: 'https://api.deezer.com/artist/202701/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/1000x1000-000000-80-0-0.jpg',
      tracklist: 'https://api.deezer.com/artist/202701/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 267793412,
      title: 'Sambas De Enredo 2022 (EP-3)',
      cover: 'https://api.deezer.com/album/267793412/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/1000x1000-000000-80-0-0.jpg',
      md5_image: '2e33f730851c023079abb853c5918028',
      tracklist: 'https://api.deezer.com/album/267793412/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 1531383272,
    readable: true,
    title: 'IGI OS\u00c8 BAOB\u00c1',
    title_short: 'IGI OS\u00c8 BAOB\u00c1',
    title_version: '',
    link: 'https://www.deezer.com/track/1531383272',
    duration: 345,
    rank: 365906,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-6014ac6e16a95e777d980a86cf635b1c-3.mp3',
    md5_image: '2e33f730851c023079abb853c5918028',
    artist: {
      id: 202701,
      name: 'Gilsinho',
      link: 'https://www.deezer.com/artist/202701',
      picture: 'https://api.deezer.com/artist/202701/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/1000x1000-000000-80-0-0.jpg',
      tracklist: 'https://api.deezer.com/artist/202701/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 267793412,
      title: 'Sambas De Enredo 2022 (EP-3)',
      cover: 'https://api.deezer.com/album/267793412/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/1000x1000-000000-80-0-0.jpg',
      md5_image: '2e33f730851c023079abb853c5918028',
      tracklist: 'https://api.deezer.com/album/267793412/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 1531383272,
    readable: true,
    title: 'IGI OS\u00c8 BAOB\u00c1',
    title_short: 'IGI OS\u00c8 BAOB\u00c1',
    title_version: '',
    link: 'https://www.deezer.com/track/1531383272',
    duration: 345,
    rank: 365906,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-6014ac6e16a95e777d980a86cf635b1c-3.mp3',
    md5_image: '2e33f730851c023079abb853c5918028',
    artist: {
      id: 202701,
      name: 'Gilsinho',
      link: 'https://www.deezer.com/artist/202701',
      picture: 'https://api.deezer.com/artist/202701/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/1000x1000-000000-80-0-0.jpg',
      tracklist: 'https://api.deezer.com/artist/202701/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 267793412,
      title: 'Sambas De Enredo 2022 (EP-3)',
      cover: 'https://api.deezer.com/album/267793412/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/1000x1000-000000-80-0-0.jpg',
      md5_image: '2e33f730851c023079abb853c5918028',
      tracklist: 'https://api.deezer.com/album/267793412/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 1531383272,
    readable: true,
    title: 'IGI OS\u00c8 BAOB\u00c1',
    title_short: 'IGI OS\u00c8 BAOB\u00c1',
    title_version: '',
    link: 'https://www.deezer.com/track/1531383272',
    duration: 345,
    rank: 365906,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-6014ac6e16a95e777d980a86cf635b1c-3.mp3',
    md5_image: '2e33f730851c023079abb853c5918028',
    artist: {
      id: 202701,
      name: 'Gilsinho',
      link: 'https://www.deezer.com/artist/202701',
      picture: 'https://api.deezer.com/artist/202701/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/1000x1000-000000-80-0-0.jpg',
      tracklist: 'https://api.deezer.com/artist/202701/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 267793412,
      title: 'Sambas De Enredo 2022 (EP-3)',
      cover: 'https://api.deezer.com/album/267793412/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/1000x1000-000000-80-0-0.jpg',
      md5_image: '2e33f730851c023079abb853c5918028',
      tracklist: 'https://api.deezer.com/album/267793412/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 1531383272,
    readable: true,
    title: 'IGI OS\u00c8 BAOB\u00c1',
    title_short: 'IGI OS\u00c8 BAOB\u00c1',
    title_version: '',
    link: 'https://www.deezer.com/track/1531383272',
    duration: 345,
    rank: 365906,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-6014ac6e16a95e777d980a86cf635b1c-3.mp3',
    md5_image: '2e33f730851c023079abb853c5918028',
    artist: {
      id: 202701,
      name: 'Gilsinho',
      link: 'https://www.deezer.com/artist/202701',
      picture: 'https://api.deezer.com/artist/202701/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/1000x1000-000000-80-0-0.jpg',
      tracklist: 'https://api.deezer.com/artist/202701/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 267793412,
      title: 'Sambas De Enredo 2022 (EP-3)',
      cover: 'https://api.deezer.com/album/267793412/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/1000x1000-000000-80-0-0.jpg',
      md5_image: '2e33f730851c023079abb853c5918028',
      tracklist: 'https://api.deezer.com/album/267793412/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 1531383272,
    readable: true,
    title: 'IGI OS\u00c8 BAOB\u00c1',
    title_short: 'IGI OS\u00c8 BAOB\u00c1',
    title_version: '',
    link: 'https://www.deezer.com/track/1531383272',
    duration: 345,
    rank: 365906,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-6014ac6e16a95e777d980a86cf635b1c-3.mp3',
    md5_image: '2e33f730851c023079abb853c5918028',
    artist: {
      id: 202701,
      name: 'Gilsinho',
      link: 'https://www.deezer.com/artist/202701',
      picture: 'https://api.deezer.com/artist/202701/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/1000x1000-000000-80-0-0.jpg',
      tracklist: 'https://api.deezer.com/artist/202701/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 267793412,
      title: 'Sambas De Enredo 2022 (EP-3)',
      cover: 'https://api.deezer.com/album/267793412/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/1000x1000-000000-80-0-0.jpg',
      md5_image: '2e33f730851c023079abb853c5918028',
      tracklist: 'https://api.deezer.com/album/267793412/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 1531383272,
    readable: true,
    title: 'IGI OS\u00c8 BAOB\u00c1',
    title_short: 'IGI OS\u00c8 BAOB\u00c1',
    title_version: '',
    link: 'https://www.deezer.com/track/1531383272',
    duration: 345,
    rank: 365906,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-6014ac6e16a95e777d980a86cf635b1c-3.mp3',
    md5_image: '2e33f730851c023079abb853c5918028',
    artist: {
      id: 202701,
      name: 'Gilsinho',
      link: 'https://www.deezer.com/artist/202701',
      picture: 'https://api.deezer.com/artist/202701/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/1000x1000-000000-80-0-0.jpg',
      tracklist: 'https://api.deezer.com/artist/202701/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 267793412,
      title: 'Sambas De Enredo 2022 (EP-3)',
      cover: 'https://api.deezer.com/album/267793412/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/1000x1000-000000-80-0-0.jpg',
      md5_image: '2e33f730851c023079abb853c5918028',
      tracklist: 'https://api.deezer.com/album/267793412/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 1531383272,
    readable: true,
    title: 'IGI OS\u00c8 BAOB\u00c1',
    title_short: 'IGI OS\u00c8 BAOB\u00c1',
    title_version: '',
    link: 'https://www.deezer.com/track/1531383272',
    duration: 345,
    rank: 365906,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-6014ac6e16a95e777d980a86cf635b1c-3.mp3',
    md5_image: '2e33f730851c023079abb853c5918028',
    artist: {
      id: 202701,
      name: 'Gilsinho',
      link: 'https://www.deezer.com/artist/202701',
      picture: 'https://api.deezer.com/artist/202701/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/1000x1000-000000-80-0-0.jpg',
      tracklist: 'https://api.deezer.com/artist/202701/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 267793412,
      title: 'Sambas De Enredo 2022 (EP-3)',
      cover: 'https://api.deezer.com/album/267793412/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/1000x1000-000000-80-0-0.jpg',
      md5_image: '2e33f730851c023079abb853c5918028',
      tracklist: 'https://api.deezer.com/album/267793412/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 1531383272,
    readable: true,
    title: 'IGI OS\u00c8 BAOB\u00c1',
    title_short: 'IGI OS\u00c8 BAOB\u00c1',
    title_version: '',
    link: 'https://www.deezer.com/track/1531383272',
    duration: 345,
    rank: 365906,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-6014ac6e16a95e777d980a86cf635b1c-3.mp3',
    md5_image: '2e33f730851c023079abb853c5918028',
    artist: {
      id: 202701,
      name: 'Gilsinho',
      link: 'https://www.deezer.com/artist/202701',
      picture: 'https://api.deezer.com/artist/202701/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/1000x1000-000000-80-0-0.jpg',
      tracklist: 'https://api.deezer.com/artist/202701/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 267793412,
      title: 'Sambas De Enredo 2022 (EP-3)',
      cover: 'https://api.deezer.com/album/267793412/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/1000x1000-000000-80-0-0.jpg',
      md5_image: '2e33f730851c023079abb853c5918028',
      tracklist: 'https://api.deezer.com/album/267793412/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 1531383272,
    readable: true,
    title: 'IGI OS\u00c8 BAOB\u00c1',
    title_short: 'IGI OS\u00c8 BAOB\u00c1',
    title_version: '',
    link: 'https://www.deezer.com/track/1531383272',
    duration: 345,
    rank: 365906,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-6014ac6e16a95e777d980a86cf635b1c-3.mp3',
    md5_image: '2e33f730851c023079abb853c5918028',
    artist: {
      id: 202701,
      name: 'Gilsinho',
      link: 'https://www.deezer.com/artist/202701',
      picture: 'https://api.deezer.com/artist/202701/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/1000x1000-000000-80-0-0.jpg',
      tracklist: 'https://api.deezer.com/artist/202701/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 267793412,
      title: 'Sambas De Enredo 2022 (EP-3)',
      cover: 'https://api.deezer.com/album/267793412/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/1000x1000-000000-80-0-0.jpg',
      md5_image: '2e33f730851c023079abb853c5918028',
      tracklist: 'https://api.deezer.com/album/267793412/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 1531383272,
    readable: true,
    title: 'IGI OS\u00c8 BAOB\u00c1',
    title_short: 'IGI OS\u00c8 BAOB\u00c1',
    title_version: '',
    link: 'https://www.deezer.com/track/1531383272',
    duration: 345,
    rank: 365906,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-6014ac6e16a95e777d980a86cf635b1c-3.mp3',
    md5_image: '2e33f730851c023079abb853c5918028',
    artist: {
      id: 202701,
      name: 'Gilsinho',
      link: 'https://www.deezer.com/artist/202701',
      picture: 'https://api.deezer.com/artist/202701/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/1000x1000-000000-80-0-0.jpg',
      tracklist: 'https://api.deezer.com/artist/202701/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 267793412,
      title: 'Sambas De Enredo 2022 (EP-3)',
      cover: 'https://api.deezer.com/album/267793412/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/1000x1000-000000-80-0-0.jpg',
      md5_image: '2e33f730851c023079abb853c5918028',
      tracklist: 'https://api.deezer.com/album/267793412/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 1531383272,
    readable: true,
    title: 'IGI OS\u00c8 BAOB\u00c1',
    title_short: 'IGI OS\u00c8 BAOB\u00c1',
    title_version: '',
    link: 'https://www.deezer.com/track/1531383272',
    duration: 345,
    rank: 365906,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-6014ac6e16a95e777d980a86cf635b1c-3.mp3',
    md5_image: '2e33f730851c023079abb853c5918028',
    artist: {
      id: 202701,
      name: 'Gilsinho',
      link: 'https://www.deezer.com/artist/202701',
      picture: 'https://api.deezer.com/artist/202701/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/1000x1000-000000-80-0-0.jpg',
      tracklist: 'https://api.deezer.com/artist/202701/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 267793412,
      title: 'Sambas De Enredo 2022 (EP-3)',
      cover: 'https://api.deezer.com/album/267793412/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/1000x1000-000000-80-0-0.jpg',
      md5_image: '2e33f730851c023079abb853c5918028',
      tracklist: 'https://api.deezer.com/album/267793412/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 1531383272,
    readable: true,
    title: 'IGI OS\u00c8 BAOB\u00c1',
    title_short: 'IGI OS\u00c8 BAOB\u00c1',
    title_version: '',
    link: 'https://www.deezer.com/track/1531383272',
    duration: 345,
    rank: 365906,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-6014ac6e16a95e777d980a86cf635b1c-3.mp3',
    md5_image: '2e33f730851c023079abb853c5918028',
    artist: {
      id: 202701,
      name: 'Gilsinho',
      link: 'https://www.deezer.com/artist/202701',
      picture: 'https://api.deezer.com/artist/202701/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/1000x1000-000000-80-0-0.jpg',
      tracklist: 'https://api.deezer.com/artist/202701/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 267793412,
      title: 'Sambas De Enredo 2022 (EP-3)',
      cover: 'https://api.deezer.com/album/267793412/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/1000x1000-000000-80-0-0.jpg',
      md5_image: '2e33f730851c023079abb853c5918028',
      tracklist: 'https://api.deezer.com/album/267793412/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 1531383272,
    readable: true,
    title: 'IGI OS\u00c8 BAOB\u00c1',
    title_short: 'IGI OS\u00c8 BAOB\u00c1',
    title_version: '',
    link: 'https://www.deezer.com/track/1531383272',
    duration: 345,
    rank: 365906,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-6014ac6e16a95e777d980a86cf635b1c-3.mp3',
    md5_image: '2e33f730851c023079abb853c5918028',
    artist: {
      id: 202701,
      name: 'Gilsinho',
      link: 'https://www.deezer.com/artist/202701',
      picture: 'https://api.deezer.com/artist/202701/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/1000x1000-000000-80-0-0.jpg',
      tracklist: 'https://api.deezer.com/artist/202701/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 267793412,
      title: 'Sambas De Enredo 2022 (EP-3)',
      cover: 'https://api.deezer.com/album/267793412/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/1000x1000-000000-80-0-0.jpg',
      md5_image: '2e33f730851c023079abb853c5918028',
      tracklist: 'https://api.deezer.com/album/267793412/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 1531383272,
    readable: true,
    title: 'IGI OS\u00c8 BAOB\u00c1',
    title_short: 'IGI OS\u00c8 BAOB\u00c1',
    title_version: '',
    link: 'https://www.deezer.com/track/1531383272',
    duration: 345,
    rank: 365906,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-6014ac6e16a95e777d980a86cf635b1c-3.mp3',
    md5_image: '2e33f730851c023079abb853c5918028',
    artist: {
      id: 202701,
      name: 'Gilsinho',
      link: 'https://www.deezer.com/artist/202701',
      picture: 'https://api.deezer.com/artist/202701/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/1000x1000-000000-80-0-0.jpg',
      tracklist: 'https://api.deezer.com/artist/202701/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 267793412,
      title: 'Sambas De Enredo 2022 (EP-3)',
      cover: 'https://api.deezer.com/album/267793412/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/1000x1000-000000-80-0-0.jpg',
      md5_image: '2e33f730851c023079abb853c5918028',
      tracklist: 'https://api.deezer.com/album/267793412/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 1531383272,
    readable: true,
    title: 'IGI OS\u00c8 BAOB\u00c1',
    title_short: 'IGI OS\u00c8 BAOB\u00c1',
    title_version: '',
    link: 'https://www.deezer.com/track/1531383272',
    duration: 345,
    rank: 365906,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-6014ac6e16a95e777d980a86cf635b1c-3.mp3',
    md5_image: '2e33f730851c023079abb853c5918028',
    artist: {
      id: 202701,
      name: 'Gilsinho',
      link: 'https://www.deezer.com/artist/202701',
      picture: 'https://api.deezer.com/artist/202701/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/1000x1000-000000-80-0-0.jpg',
      tracklist: 'https://api.deezer.com/artist/202701/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 267793412,
      title: 'Sambas De Enredo 2022 (EP-3)',
      cover: 'https://api.deezer.com/album/267793412/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/1000x1000-000000-80-0-0.jpg',
      md5_image: '2e33f730851c023079abb853c5918028',
      tracklist: 'https://api.deezer.com/album/267793412/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 1531383272,
    readable: true,
    title: 'IGI OS\u00c8 BAOB\u00c1',
    title_short: 'IGI OS\u00c8 BAOB\u00c1',
    title_version: '',
    link: 'https://www.deezer.com/track/1531383272',
    duration: 345,
    rank: 365906,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-6014ac6e16a95e777d980a86cf635b1c-3.mp3',
    md5_image: '2e33f730851c023079abb853c5918028',
    artist: {
      id: 202701,
      name: 'Gilsinho',
      link: 'https://www.deezer.com/artist/202701',
      picture: 'https://api.deezer.com/artist/202701/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/1000x1000-000000-80-0-0.jpg',
      tracklist: 'https://api.deezer.com/artist/202701/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 267793412,
      title: 'Sambas De Enredo 2022 (EP-3)',
      cover: 'https://api.deezer.com/album/267793412/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/1000x1000-000000-80-0-0.jpg',
      md5_image: '2e33f730851c023079abb853c5918028',
      tracklist: 'https://api.deezer.com/album/267793412/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 1531383272,
    readable: true,
    title: 'IGI OS\u00c8 BAOB\u00c1',
    title_short: 'IGI OS\u00c8 BAOB\u00c1',
    title_version: '',
    link: 'https://www.deezer.com/track/1531383272',
    duration: 345,
    rank: 365906,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-6014ac6e16a95e777d980a86cf635b1c-3.mp3',
    md5_image: '2e33f730851c023079abb853c5918028',
    artist: {
      id: 202701,
      name: 'Gilsinho',
      link: 'https://www.deezer.com/artist/202701',
      picture: 'https://api.deezer.com/artist/202701/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/1000x1000-000000-80-0-0.jpg',
      tracklist: 'https://api.deezer.com/artist/202701/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 267793412,
      title: 'Sambas De Enredo 2022 (EP-3)',
      cover: 'https://api.deezer.com/album/267793412/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/1000x1000-000000-80-0-0.jpg',
      md5_image: '2e33f730851c023079abb853c5918028',
      tracklist: 'https://api.deezer.com/album/267793412/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 1531383272,
    readable: true,
    title: 'IGI OS\u00c8 BAOB\u00c1',
    title_short: 'IGI OS\u00c8 BAOB\u00c1',
    title_version: '',
    link: 'https://www.deezer.com/track/1531383272',
    duration: 345,
    rank: 365906,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-6014ac6e16a95e777d980a86cf635b1c-3.mp3',
    md5_image: '2e33f730851c023079abb853c5918028',
    artist: {
      id: 202701,
      name: 'Gilsinho',
      link: 'https://www.deezer.com/artist/202701',
      picture: 'https://api.deezer.com/artist/202701/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/1000x1000-000000-80-0-0.jpg',
      tracklist: 'https://api.deezer.com/artist/202701/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 267793412,
      title: 'Sambas De Enredo 2022 (EP-3)',
      cover: 'https://api.deezer.com/album/267793412/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/1000x1000-000000-80-0-0.jpg',
      md5_image: '2e33f730851c023079abb853c5918028',
      tracklist: 'https://api.deezer.com/album/267793412/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 1531383272,
    readable: true,
    title: 'IGI OS\u00c8 BAOB\u00c1',
    title_short: 'IGI OS\u00c8 BAOB\u00c1',
    title_version: '',
    link: 'https://www.deezer.com/track/1531383272',
    duration: 345,
    rank: 365906,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-6014ac6e16a95e777d980a86cf635b1c-3.mp3',
    md5_image: '2e33f730851c023079abb853c5918028',
    artist: {
      id: 202701,
      name: 'Gilsinho',
      link: 'https://www.deezer.com/artist/202701',
      picture: 'https://api.deezer.com/artist/202701/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/1000x1000-000000-80-0-0.jpg',
      tracklist: 'https://api.deezer.com/artist/202701/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 267793412,
      title: 'Sambas De Enredo 2022 (EP-3)',
      cover: 'https://api.deezer.com/album/267793412/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/1000x1000-000000-80-0-0.jpg',
      md5_image: '2e33f730851c023079abb853c5918028',
      tracklist: 'https://api.deezer.com/album/267793412/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 1531383272,
    readable: true,
    title: 'IGI OS\u00c8 BAOB\u00c1',
    title_short: 'IGI OS\u00c8 BAOB\u00c1',
    title_version: '',
    link: 'https://www.deezer.com/track/1531383272',
    duration: 345,
    rank: 365906,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-6014ac6e16a95e777d980a86cf635b1c-3.mp3',
    md5_image: '2e33f730851c023079abb853c5918028',
    artist: {
      id: 202701,
      name: 'Gilsinho',
      link: 'https://www.deezer.com/artist/202701',
      picture: 'https://api.deezer.com/artist/202701/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/1000x1000-000000-80-0-0.jpg',
      tracklist: 'https://api.deezer.com/artist/202701/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 267793412,
      title: 'Sambas De Enredo 2022 (EP-3)',
      cover: 'https://api.deezer.com/album/267793412/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/1000x1000-000000-80-0-0.jpg',
      md5_image: '2e33f730851c023079abb853c5918028',
      tracklist: 'https://api.deezer.com/album/267793412/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 1531383272,
    readable: true,
    title: 'IGI OS\u00c8 BAOB\u00c1',
    title_short: 'IGI OS\u00c8 BAOB\u00c1',
    title_version: '',
    link: 'https://www.deezer.com/track/1531383272',
    duration: 345,
    rank: 365906,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-6014ac6e16a95e777d980a86cf635b1c-3.mp3',
    md5_image: '2e33f730851c023079abb853c5918028',
    artist: {
      id: 202701,
      name: 'Gilsinho',
      link: 'https://www.deezer.com/artist/202701',
      picture: 'https://api.deezer.com/artist/202701/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/1000x1000-000000-80-0-0.jpg',
      tracklist: 'https://api.deezer.com/artist/202701/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 267793412,
      title: 'Sambas De Enredo 2022 (EP-3)',
      cover: 'https://api.deezer.com/album/267793412/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/1000x1000-000000-80-0-0.jpg',
      md5_image: '2e33f730851c023079abb853c5918028',
      tracklist: 'https://api.deezer.com/album/267793412/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 1531383272,
    readable: true,
    title: 'IGI OS\u00c8 BAOB\u00c1',
    title_short: 'IGI OS\u00c8 BAOB\u00c1',
    title_version: '',
    link: 'https://www.deezer.com/track/1531383272',
    duration: 345,
    rank: 365906,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-6014ac6e16a95e777d980a86cf635b1c-3.mp3',
    md5_image: '2e33f730851c023079abb853c5918028',
    artist: {
      id: 202701,
      name: 'Gilsinho',
      link: 'https://www.deezer.com/artist/202701',
      picture: 'https://api.deezer.com/artist/202701/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/1000x1000-000000-80-0-0.jpg',
      tracklist: 'https://api.deezer.com/artist/202701/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 267793412,
      title: 'Sambas De Enredo 2022 (EP-3)',
      cover: 'https://api.deezer.com/album/267793412/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/1000x1000-000000-80-0-0.jpg',
      md5_image: '2e33f730851c023079abb853c5918028',
      tracklist: 'https://api.deezer.com/album/267793412/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 1531383272,
    readable: true,
    title: 'IGI OS\u00c8 BAOB\u00c1',
    title_short: 'IGI OS\u00c8 BAOB\u00c1',
    title_version: '',
    link: 'https://www.deezer.com/track/1531383272',
    duration: 345,
    rank: 365906,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-6014ac6e16a95e777d980a86cf635b1c-3.mp3',
    md5_image: '2e33f730851c023079abb853c5918028',
    artist: {
      id: 202701,
      name: 'Gilsinho',
      link: 'https://www.deezer.com/artist/202701',
      picture: 'https://api.deezer.com/artist/202701/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/1000x1000-000000-80-0-0.jpg',
      tracklist: 'https://api.deezer.com/artist/202701/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 267793412,
      title: 'Sambas De Enredo 2022 (EP-3)',
      cover: 'https://api.deezer.com/album/267793412/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/1000x1000-000000-80-0-0.jpg',
      md5_image: '2e33f730851c023079abb853c5918028',
      tracklist: 'https://api.deezer.com/album/267793412/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 1531383272,
    readable: true,
    title: 'IGI OS\u00c8 BAOB\u00c1',
    title_short: 'IGI OS\u00c8 BAOB\u00c1',
    title_version: '',
    link: 'https://www.deezer.com/track/1531383272',
    duration: 345,
    rank: 365906,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-6014ac6e16a95e777d980a86cf635b1c-3.mp3',
    md5_image: '2e33f730851c023079abb853c5918028',
    artist: {
      id: 202701,
      name: 'Gilsinho',
      link: 'https://www.deezer.com/artist/202701',
      picture: 'https://api.deezer.com/artist/202701/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/1000x1000-000000-80-0-0.jpg',
      tracklist: 'https://api.deezer.com/artist/202701/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 267793412,
      title: 'Sambas De Enredo 2022 (EP-3)',
      cover: 'https://api.deezer.com/album/267793412/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/1000x1000-000000-80-0-0.jpg',
      md5_image: '2e33f730851c023079abb853c5918028',
      tracklist: 'https://api.deezer.com/album/267793412/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 1531383272,
    readable: true,
    title: 'IGI OS\u00c8 BAOB\u00c1',
    title_short: 'IGI OS\u00c8 BAOB\u00c1',
    title_version: '',
    link: 'https://www.deezer.com/track/1531383272',
    duration: 345,
    rank: 365906,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-6014ac6e16a95e777d980a86cf635b1c-3.mp3',
    md5_image: '2e33f730851c023079abb853c5918028',
    artist: {
      id: 202701,
      name: 'Gilsinho',
      link: 'https://www.deezer.com/artist/202701',
      picture: 'https://api.deezer.com/artist/202701/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/1000x1000-000000-80-0-0.jpg',
      tracklist: 'https://api.deezer.com/artist/202701/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 267793412,
      title: 'Sambas De Enredo 2022 (EP-3)',
      cover: 'https://api.deezer.com/album/267793412/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/1000x1000-000000-80-0-0.jpg',
      md5_image: '2e33f730851c023079abb853c5918028',
      tracklist: 'https://api.deezer.com/album/267793412/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 1531383272,
    readable: true,
    title: 'IGI OS\u00c8 BAOB\u00c1',
    title_short: 'IGI OS\u00c8 BAOB\u00c1',
    title_version: '',
    link: 'https://www.deezer.com/track/1531383272',
    duration: 345,
    rank: 365906,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-6014ac6e16a95e777d980a86cf635b1c-3.mp3',
    md5_image: '2e33f730851c023079abb853c5918028',
    artist: {
      id: 202701,
      name: 'Gilsinho',
      link: 'https://www.deezer.com/artist/202701',
      picture: 'https://api.deezer.com/artist/202701/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/1000x1000-000000-80-0-0.jpg',
      tracklist: 'https://api.deezer.com/artist/202701/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 267793412,
      title: 'Sambas De Enredo 2022 (EP-3)',
      cover: 'https://api.deezer.com/album/267793412/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/1000x1000-000000-80-0-0.jpg',
      md5_image: '2e33f730851c023079abb853c5918028',
      tracklist: 'https://api.deezer.com/album/267793412/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 1531383272,
    readable: true,
    title: 'IGI OS\u00c8 BAOB\u00c1',
    title_short: 'IGI OS\u00c8 BAOB\u00c1',
    title_version: '',
    link: 'https://www.deezer.com/track/1531383272',
    duration: 345,
    rank: 365906,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-6014ac6e16a95e777d980a86cf635b1c-3.mp3',
    md5_image: '2e33f730851c023079abb853c5918028',
    artist: {
      id: 202701,
      name: 'Gilsinho',
      link: 'https://www.deezer.com/artist/202701',
      picture: 'https://api.deezer.com/artist/202701/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/1000x1000-000000-80-0-0.jpg',
      tracklist: 'https://api.deezer.com/artist/202701/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 267793412,
      title: 'Sambas De Enredo 2022 (EP-3)',
      cover: 'https://api.deezer.com/album/267793412/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/1000x1000-000000-80-0-0.jpg',
      md5_image: '2e33f730851c023079abb853c5918028',
      tracklist: 'https://api.deezer.com/album/267793412/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 1531383272,
    readable: true,
    title: 'IGI OS\u00c8 BAOB\u00c1',
    title_short: 'IGI OS\u00c8 BAOB\u00c1',
    title_version: '',
    link: 'https://www.deezer.com/track/1531383272',
    duration: 345,
    rank: 365906,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-6014ac6e16a95e777d980a86cf635b1c-3.mp3',
    md5_image: '2e33f730851c023079abb853c5918028',
    artist: {
      id: 202701,
      name: 'Gilsinho',
      link: 'https://www.deezer.com/artist/202701',
      picture: 'https://api.deezer.com/artist/202701/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/1000x1000-000000-80-0-0.jpg',
      tracklist: 'https://api.deezer.com/artist/202701/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 267793412,
      title: 'Sambas De Enredo 2022 (EP-3)',
      cover: 'https://api.deezer.com/album/267793412/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/1000x1000-000000-80-0-0.jpg',
      md5_image: '2e33f730851c023079abb853c5918028',
      tracklist: 'https://api.deezer.com/album/267793412/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 1531383272,
    readable: true,
    title: 'IGI OS\u00c8 BAOB\u00c1',
    title_short: 'IGI OS\u00c8 BAOB\u00c1',
    title_version: '',
    link: 'https://www.deezer.com/track/1531383272',
    duration: 345,
    rank: 365906,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-6014ac6e16a95e777d980a86cf635b1c-3.mp3',
    md5_image: '2e33f730851c023079abb853c5918028',
    artist: {
      id: 202701,
      name: 'Gilsinho',
      link: 'https://www.deezer.com/artist/202701',
      picture: 'https://api.deezer.com/artist/202701/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/1000x1000-000000-80-0-0.jpg',
      tracklist: 'https://api.deezer.com/artist/202701/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 267793412,
      title: 'Sambas De Enredo 2022 (EP-3)',
      cover: 'https://api.deezer.com/album/267793412/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/1000x1000-000000-80-0-0.jpg',
      md5_image: '2e33f730851c023079abb853c5918028',
      tracklist: 'https://api.deezer.com/album/267793412/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: 1531383272,
    readable: true,
    title: 'IGI OS\u00c8 BAOB\u00c1',
    title_short: 'IGI OS\u00c8 BAOB\u00c1',
    title_version: '',
    link: 'https://www.deezer.com/track/1531383272',
    duration: 345,
    rank: 365906,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-6014ac6e16a95e777d980a86cf635b1c-3.mp3',
    md5_image: '2e33f730851c023079abb853c5918028',
    artist: {
      id: 202701,
      name: 'Gilsinho',
      link: 'https://www.deezer.com/artist/202701',
      picture: 'https://api.deezer.com/artist/202701/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/41b9719ff2915b05805a807d30e83095/1000x1000-000000-80-0-0.jpg',
      tracklist: 'https://api.deezer.com/artist/202701/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 267793412,
      title: 'Sambas De Enredo 2022 (EP-3)',
      cover: 'https://api.deezer.com/album/267793412/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/2e33f730851c023079abb853c5918028/1000x1000-000000-80-0-0.jpg',
      md5_image: '2e33f730851c023079abb853c5918028',
      tracklist: 'https://api.deezer.com/album/267793412/tracks',
      type: 'album',
    },
    type: 'track',
  },
]

interface SearchCardProps {
  addNewTrack: (element: PlaylistItem) => void
  playlist: PlaylistItem[]
}

const SearchCard = ({ addNewTrack, playlist }: SearchCardProps) => {
  const [search, setSearch] = useState('Adel')
  const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=' + search
  const {
    data: list,

    isLoading,
  } = useQuery({
    enabled: !!search,
    queryKey: url,
    queryFn: ({ signal }) => {
      const cancelToken = axios.CancelToken
      const source = cancelToken.source()

      const promise = axios
        .get(url, {
          headers: {
            'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
            'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
          },
          cancelToken: source.token,
        })
        .then(res => {
          if (res.data.hasOwnProperty('data')) {
            return res.data.data
          }
          console.log(res)
          throw new Error('TODO - handle api errors')
        })

      signal?.addEventListener('abort', () => {
        source.cancel('Query was cancelled by React Query')
      })

      return promise
    },
  })

  return (
    <Card tw="xl:col-span-7 overflow-auto h-[calc(100vh - 72px - 48px)]">
      <header tw="p-4 pb-6">
        <Input
          name="search"
          isLoading={isLoading}
          label="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </header>

      {list?.length ? (
        <List
          list={list}
          action={item => {
            const isSelected = playlist.find(({ id }: any) => item.id === id)
            return (
              <ButtonIcon
                onClick={() => addNewTrack(item)}
                disabled={!!isSelected || playlist.length >= 5}
              >
                {isSelected ? <FiCheck /> : <AiOutlinePlusCircle />}
              </ButtonIcon>
            )
          }}
        />
      ) : (
        <div tw="p-4">TODO - add handle no resources</div>
      )}
    </Card>
  )
}

export default SearchCard
