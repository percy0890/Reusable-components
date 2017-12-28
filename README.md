# Reusable-components

## *Favorite(star) Component
   toggle on click of star...

## *Tile-Casing Component
#### when you pass the string it will give you the tile-casing string.
###### For example:
##### Input: the rise of the planet of the apes.
##### Output: The Rise of the Planet of the Apes.

it will leave preposition 'of' and 'the' in lowerCase if it is in the middle of the string...

## *Pipe for tile-casing

using this pipe(filter), you can convert your string in tile-casing...

## In order to make your Component more reusable you have to add a bunch of input & output properties:

#### we use i/p properties to pass input or state to a component..
#### we use o/p properties to raise custom events from the component..

combination of both are called public API of that component: or COMPONENT API,

###### we cannot add i/p & o/p properties directly to our component by just using property & event binding respectively.

#### we'll add input property using @Input deorator

#### Aliasing I/P OR O/P : keep the contracts of that api stable.

## passing event data when raising custom event..

creating an instance of EventEmitter & emit the value using emit() method.

## View Encapsulation (concept of SHADOW DOM)

#### Emulated, Native, None: 
it should be emulated so that css will not overwrite by some other css class... 

#### shadow dom is supported by chrome(^63 version) & safari(^10 version)
#### encapsulation: ViewEncapsulation.Emulated

## ng-content
It can be the other option to add input property to your component at somr place. 
You dont need a selector if you have only one ng-content

###### at run time ng-content will replace entirely by the element having selector class





