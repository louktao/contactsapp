import ContactsApp from './components/ContactsApp';

let contacts = [
  { name: "Cassio Zen" , email : "cassiozen@gmail.com" },
  { name: "Dan Abramov" , email : "gaearon@somewhere.com" },
  { name: "Pete Hunt" , email : "floydophone@somewhere.com" },
  { name: "Paul O'Shannessy" , email : "zpao@somewhere.com" },
  { name: "Ryan Florence" , email : "rpflorence@somewhere.com" },
  { name: "Sebastian Markbage" , email : "sebmarkbage@here.com" },
]

function App() {
  return (
    <ContactsApp contacts={contacts} />
  )
}

export default App;
