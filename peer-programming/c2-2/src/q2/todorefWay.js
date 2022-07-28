import { useState } from 'react'
import './styles.css'

const members = [
  {
    id: 3175,
    uid: '9ebc106a-4eb8-4466-8842-70e38a3955f6',
    password: 'S63wh8RYIP',
    first_name: 'Bradley',
    last_name: 'Hirthe',
    username: 'bradley.hirthe',
    email: 'bradley.hirthe@email.com',
    avatar:
      'https://robohash.org/autemdoloremquemolestias.png?size=300x300\u0026set=set1',
    gender: 'Male',
    phone_number: '+1 194.107.0082 x545',
    social_insurance_number: '327019345',
    date_of_birth: '1987-02-21',
    employment: {
      title: 'Direct Manufacturing Director',
      key_skill: 'Self-motivated'
    },
    credit_card: { cc_number: '6771-8949-9344-6970' },
    subscription: {
      plan: 'Diamond',
      status: 'Not Active',
      payment_method: 'Debit card',
      term: 'Annual'
    }
  },
  {
    id: 9672,
    uid: 'c29b5822-9c7b-4ad4-837c-72f3cb4c2ec1',
    password: 'KEkC0erZ8R',
    first_name: 'Shannon',
    last_name: 'Friesen',
    username: 'shannon.friesen',
    email: 'shannon.friesen@email.com',
    avatar: 'https://robohash.org/eumenimmodi.png?size=300x300\u0026set=set1',
    gender: 'Female',
    phone_number: '+256 (574) 185-2495 x43217',
    social_insurance_number: '726869118',
    date_of_birth: '1963-06-28',
    employment: {
      title: 'Product Community-Services Architect',
      key_skill: 'Teamwork'
    },
    credit_card: { cc_number: '4714-5793-0210-3165' },
    subscription: {
      plan: 'Gold',
      status: 'Not Active',
      payment_method: 'PhonePe',
      term: 'Monthly'
    }
  },
  {
    id: 3272,
    uid: '73526f6b-5908-4b51-b639-508b52bfcb95',
    password: 'PRuGU1',
    first_name: 'Kareen',
    last_name: 'Wintheiser',
    username: 'kareen.wintheiser',
    email: 'kareen.wintheiser@email.com',
    avatar:
      'https://robohash.org/voluptatumfacilisdelectus.png?size=300x300\u0026set=set1',
    gender: 'Female',
    phone_number: '+1-246 745.867.8596 x999',
    social_insurance_number: '238038475',
    date_of_birth: '1958-02-22',
    employment: {
      title: 'Human Education Developer',
      key_skill: 'Self-motivated'
    },
    credit_card: { cc_number: '4307-2526-6771-0346' },
    subscription: {
      plan: 'Diamond',
      status: 'Active',
      payment_method: 'Cheque',
      term: 'Payment in advance'
    }
  },
  {
    id: 7106,
    uid: 'f7caddd2-e11e-4b6b-ac51-f7d9c6593e06',
    password: 'jfJBxvEcUY',
    first_name: 'Jeramy',
    last_name: 'Goldner',
    username: 'jeramy.goldner',
    email: 'jeramy.goldner@email.com',
    avatar:
      'https://robohash.org/abaccusamusmagnam.png?size=300x300\u0026set=set1',
    gender: 'Male',
    phone_number: '+356 400-371-6703 x0938',
    social_insurance_number: '142867969',
    date_of_birth: '1979-11-14',
    employment: { title: 'Direct Assistant', key_skill: 'Self-motivated' },
    address: {
      city: 'Luettgenville',
      street_name: 'Reichel Mission',
      street_address: '1109 Gerardo Burg',
      zip_code: '08988-0320',
      state: 'Rhode Island',
      country: 'United States',
      coordinates: { lat: 43.52268600845281, lng: 131.844707866771 }
    },
    credit_card: { cc_number: '4469270622981' },
    subscription: {
      plan: 'Bronze',
      status: 'Active',
      payment_method: 'Bitcoins',
      term: 'Payment in advance'
    }
  },
  {
    id: 4194,
    uid: '57ba4fcf-be84-4752-b27c-4d0961549181',
    password: 'RnEL18i',
    first_name: 'Jefferson',
    last_name: 'Fisher',
    username: 'jefferson.fisher',
    email: 'jefferson.fisher@email.com',
    avatar:
      'https://robohash.org/voluptatumetest.png?size=300x300\u0026set=set1',
    gender: 'Male',
    phone_number: '+242 1-516-706-9089 x9517',
    social_insurance_number: '924531809',
    date_of_birth: '1997-09-30',
    employment: {
      title: 'Legacy Healthcare Representative',
      key_skill: 'Fast learner'
    },
    address: {
      city: 'North Tammera',
      street_name: 'Frederick Springs',
      street_address: '880 Delena Drives',
      zip_code: '87151-3364',
      state: 'Illinois',
      country: 'United States',
      coordinates: { lat: -84.72120134348252, lng: -89.28885923584329 }
    },
    credit_card: { cc_number: '4753574494241' },
    subscription: {
      plan: 'Free Trial',
      status: 'Active',
      payment_method: 'Cash',
      term: 'Monthly'
    }
  },
  {
    id: 6289,
    uid: '130ac685-40d8-401d-9f7d-74cb396b65b1',
    password: 'EXWwRpvF',
    first_name: 'Belle',
    last_name: 'Ratke',
    username: 'belle.ratke',
    email: 'belle.ratke@email.com',
    avatar:
      'https://robohash.org/officiadolorumdolorem.png?size=300x300\u0026set=set1',
    gender: 'Male',
    phone_number: '+33 1-389-681-2026 x0604',
    social_insurance_number: '943136812',
    date_of_birth: '2002-06-28',
    employment: {
      title: 'Community-Services Developer',
      key_skill: 'Teamwork'
    },
    address: {
      city: 'Basilport',
      street_name: 'Mahalia Point',
      street_address: "7472 O'Hara Place",
      zip_code: '22382',
      state: 'Vermont',
      country: 'United States',
      coordinates: { lat: 51.290024932436665, lng: 55.713594439138916 }
    },
    credit_card: { cc_number: '5545-2183-6316-1133' },
    subscription: {
      plan: 'Platinum',
      status: 'Active',
      payment_method: 'Paypal',
      term: 'Payment in advance'
    }
  },
  {
    id: 2424,
    uid: 'e3ddf661-8e86-4973-a1fe-3445b2b96722',
    password: 'aIYZMeuXfB',
    first_name: 'Rodrigo',
    last_name: 'Herzog',
    username: 'rodrigo.herzog',
    email: 'rodrigo.herzog@email.com',
    avatar: 'https://robohash.org/eaeumincidunt.png?size=300x300\u0026set=set1',
    gender: 'Male',
    phone_number: '+972 942.675.7632 x99185',
    social_insurance_number: '355297615',
    date_of_birth: '1981-03-05',
    employment: { title: 'Education Director', key_skill: 'Technical savvy' },
    address: {
      city: 'Port Karieborough',
      street_name: 'Beier Camp',
      street_address: '216 Tequila Track',
      zip_code: '91096',
      state: 'Alaska',
      country: 'United States',
      coordinates: { lat: -79.8587974402784, lng: 107.54441407309668 }
    },
    credit_card: { cc_number: '5357-3700-5566-7088' },
    subscription: {
      plan: 'Business',
      status: 'Active',
      payment_method: 'Google Pay',
      term: 'Payment in advance'
    }
  }
]

export default function App () {
  const [profile, setProfile] = useState()
  const [error, setError] = useState('')

  const checkProfile = user => {
    if (user.password.length > 9) {
      setProfile(user)
      setError('')
    } else {
      setProfile({})
      setError('profile is fraud')
    }
  }
  return (
    <div className='App'>
      <h1>Users</h1>

      <div>
        {members
          .filter(userData => userData.subscription.status === 'Active')
          .map(user => (
            <p key={user.id}>
              {user.first_name}
              {user.last_name}{' '}
              <button onClick={e => checkProfile(user)}>Check Profile</button>
            </p>
          ))}
        {profile ? (
          <div>
            <h2>Profile Data</h2>
            <p>
              {profile.first_name} {' - '} {profile.last_name}
            </p>
            <p>{profile.email}</p>
            <p>{profile.date_of_birth}</p>
            <p>{profile.subscription?.status}</p>
            <p>{profile.subscription?.plan}</p>
          </div>
        ) : (
          ''
        )}
        {error ? <p>{error}</p> : ''}
      </div>
    </div>
  )
}
