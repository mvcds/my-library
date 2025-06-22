An HTML specification to nest metadata into existing content, so that a richer experience for users can be provided

The [[Semantics]] are not set by any Microdata, so it's up to the developer to setup their own [[Vocabulary]] or to use an existing one, for instance available at https://schema.org

```html
<section>
  Hello, my name is John Doe, I am a graduate research assistant at the
  University of Dreams. My friends call me Johnny. You can visit my homepage at
  <a href="http://www.JohnnyD.com">www.JohnnyD.com</a>. I live at 1234 Peach
  Drive, Warner Robins, Georgia.
</section>
```

Example

```html
<section itemscope itemtype="http://schema.org/Person">
  Hello, my name is
  <span itemprop="name">John Doe</span>, I am a
  <span itemprop="jobTitle">graduate research assistant</span>
  at the
  <span itemprop="affiliation">University of Dreams</span>. My friends call me
  <span itemprop="additionalName">Johnny</span>. You can visit my homepage at
  <a href="http://www.JohnnyD.com" itemprop="url">www.JohnnyD.com</a>.
  <section
    itemprop="address"
    itemscope
    itemtype="http://schema.org/PostalAddress"
  >
    I live at
    <span itemprop="streetAddress">1234 Peach Drive</span>,
    <span itemprop="addressLocality">Warner Robins</span>,
    <span itemprop="addressRegion">Georgia</span>.
  </section>
</section>
```

Another way to show it

````
Item
   Type: http://schema.org/Person
   name = John Doe
   jobTitle = graduate research assistant
   affiliation = University of Dreams
   additionalName = Johnny
   url = http://www.johnnyd.com/
   address = Item(1)
Item 1
   Type: http://schema.org/PostalAddress
   streetAddress = 1234 Peach Drive
   addressLocality = Warner Robins
   addressRegion = Georgia
```
````
