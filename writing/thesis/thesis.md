---
lang: en-US
title: |
  Universal Income Guarantees.  
  An opportunity to rethink welfare?
date: |
  __Thesis Advisors__  
  Daniel Sauter  
  Aaron Hill  
  ---  
  Submitted in partial fulfillment of the requirements for the degree of Master Science in Data Visualization at Parsons School of Design.  
  ---  
  May 2019
author: |
  Felix Buchholz  
keywords: [Universal Income Guarantee, Universal Basic Income, Negative Income Tax]
abstract: |
  A presidential candidate currently running his campaign on a universal basic income (UBI) platform in the United States shows how much traction the idea of a guaranteed, unconditional income as a government transfer to all citizens has gained in recent years. While it is definitely a highly controversial topic, it seems remarkable that in an increasingly polarized political environment support for this idea can be found across in other regards antagonistic ideological camps. Analysis of the debate around UBI might find that its appeal originates in the fact that in the core idea does not promote a full political program but rather is a strategy of rethinking welfare – with different political perspectives leading to an assemblage of specific UBI plans. Perplexion in this debate arises when these particular concepts are considered or suggested to be inherently equivalent policies.  

  In order to enable readers to engage in a more nuanced debate around universal income guarantees, I want to identify and explore strategies to avoid escalation and demarcation in the presentation of a political proposition. In this paper, I want to discuss how a combination of a data-driven essay and open-ended user interaction can help enhance engagement in exploring a balanced argument.
numbersections: true
# pandoc --filter pandoc-crossref --filter pandoc-fignos --filter pandoc-citeproc --template=template.latex --bibliography=thesis.bib --toc -V documentclass=scrreprt --variable classoption=twocolumn --variable papersize=letter -s thesis.md -o thesis.pdf 
---

# Introduction

Political polarization has been growing for some time now in the US [@mansbridgeOpinionThreeReasons2016] and increasingly becomes a problem when it undermines finding solutions to pressing issues or even agreeing which problems are essential to solve [@jonesRepublicansDemocratsHave2019]. Finding strategies to avoid mechanisms of escalation and demarcation when talking about political proposals is a central motivation for this project [^sequence]. The case study to identify and practically explore these strategies are proposals I termed as universal income guarantees (UIG) as an umbrella term for a set of distinct propositions. UIGs share the idea of introducing a guaranteed money transfer by the government to all citizens. To facilitate this process, I will first try to assess a nuanced overview over arguments for and against a universal income guarantee and then develop an approach to communicate these arguments engagingly. 

While historically there has been recurrent interest in the idea of a guaranteed money transfers, proponents in contemporary debates have suggested that technologic and socio-economic developments in recent decades render the implementation of a universal income guarantee feasible for the first time thanks to growing automation – if not necessary in anticipation of higher levels of unemployment and growing inequalities threatening to unravel the fabric of society. These different notions already introduce a bandwidth of perspectives on UIGs, where common ground still has to be found. Apart from the fact that it is a central issued money transfer, one has to acknowledge that there is no single commonly accepted UIG proposal in the form of a political program yet. While this ambiguity sparks interests of thinkers of different orientation on the political compass, it can confuse arguments when the innovation of rethinking how to distribute welfare is tightly interwoven with answers to questions of (re-)allocating resources, the moral justification of a UIG and when different answers to these questions are conflated. In this paper, I want to suggest that it can be beneficial to temporarily separate these concerns, undoubtedly admitting their inherent connections.

In my research, I was able to identify four categories of UIGs that offer a specific enough answer to the question of what level of basic income should be granted and whether it complements or (partially) replaces current welfare programs: First, a UIG replacing current welfare entirely where current spending determines the amount of the transfer. Second, models where the basic income only partially replaces welfare (health care and education could be provided at a basic level for example) and the amount helps to ease situations of hardship but is not enough to sustain a living. Category three builds on the second one but raises the income just above the poverty line, making it possible to sustain a modest living in areas where the cost of living is below or around the average. The last category marks the end of this spectrum, where the level of basic income would be comfortable enough to render work optional. While these categories are an essential distinction in the scope of this paper, the practical project leaves it up to the user to discover these different possibilities by themselves.

Models in each of these categories try to identify the main concerns a UIG would be able to address. I am using a data visualization approach to illustrate a selection of these concerns, proposed solutions but also to allow a direct comparison of solutions across these four categories with a user interface that gives immediate feedback over the (re-)allocation of resources after changing specific parameters. I’m hoping to create a small-scale learning environment that helps understand that a UIG, when translated into a concrete political implementation, is more than a cross-ideological distribution mechanism: like every political program it then also becomes a broader vision of “obligations we have to one another, the origins of property, the ends of human life, the shape of our society” [@battistoniFalsePromiseUniversal2017]. In this regard, I see a UIG debate as an opportunity to think about innovating welfare, and once clarity over broader visions is established, it might even offer new perspectives for compromise in a highly polarized political environment.

# Treatment

## What is a UIG?

There is no final consensus on the question of what exactly terms like universal basic income (UBI) and negative income tax (NIT) means or how specific they are. I use the term universal income guarantee (UIG) in the broadest sense as an umbrella term and introduce four categories that are specific enough to compare different UIG implementation plans[^ubiConfusion]. What these concepts have in common is that they are a form of “negative tax” [@widerquistCostBasicIncome2017, 5]. A negative tax in this sense is any kind of transfer, tax reduction, or tax credit, as we know already in the current welfare and taxation system [@widerquistCostBasicIncome2017, 5]. But in contrast to the historically grown convolution of current programs and policies usually targeted at a specific part of the population or designed for a concrete situation of need, UIGs are intended to “reach all (or a very large portion of the population) with no (or minimal) conditions” [@franceseWhatUniversalBasic2018, 38]. 

[^ubiConfusion]: In the contemporary debate, different names can describe identical concepts or slight variations of similar concepts. Also, for perfect confusion, two names can be used synonymously for one concept in one context and to identify an essential distinction between two concepts in another context [@widerquistCriticalAnalysisBasic2018, 16].

Beyond these commonalities, there are quite a few differences between UIG concepts, not only in regards to the justifications and goals of a UIG but also and often related to that, the conception of the practical implementation. The IMF introduced six categories of key (pragmatic) binary features to distinguish between UIG concepts that provide helpful orientation for this project: exclusivity, regularity, coverage, eligibility criteria, recipient unit, and form of distribution.[@franceseWhatUniversalBasic2018, 38; @internationalmonetaryfundFiscalMonitorTackling2017, 17]. _Exclusivity_ describes if the transfer is intended to substitute current social protection programs or if it is regarded as complementary to existing transfers [^noExtremes]. In terms of _regularity_ and _coverage_ I will only look at regular, universal, and unconditional programs, omitting Thomas Paine’s one-time capital grant[^paine] and Atkinson’s means-tested conception[^atkinson]. _Recipient unit_ and _form of distribution_ are usually linked to each other and the main difference between NIT and UBI plans: While NIT plans generally want to fit the mechanism directly to the established income tax system and use tax credits for its reference unit of one household, UBI plans emphasize universality and propose a cash transfer to individuals. In this strict definition of terms, a NIT is an annual ex-post benefit, while almost all UBI proposals are monthly ex-ante transfers. 

[^paine]: Thomas Paine suggests a capital grant to everyone at the age of 21 to compensate for the different inheritances [@paineAgrarianJustice17972004, 10]. 
[^atkinson]: Atkinson proposes a “participation” income that is means-tested – to receive it a citizen is expected to make any form of social contribution: “full- or part-time waged employment or self-employment, by education, training, or an active job search, by home care for infant children or frail elderly people, or by regular voluntary work in a recognised association” [@atkinsonInequalityWhatCan2015, 219]

![Chart of different positions regarding key features of UIG concepts according to @franceseWhatUniversalBasic2018, 38.](./assets/franceseWhatUniversalBasic2018_38.jpg){#fig:keyUBIFeatures}

Figure @fig:keyUBIFeatures shows the placements of different author’s positions along the lines of these key features. For this project, I will specifically draw from Milton Friedman’s NIT concept [@friedmanCapitalismFreedom2002] and Karl Widerquist’s UBI concept [@widerquistCostBasicIncome2017] that is, in terms of this scheme, congruent to Phillipe Van Parijs’ (_marked in light blue in figure @fig:keyUBIFeatures_).

[^noExtremes]: While figure @fig:keyUBIFeatures suggests a binary classification for this feature, none of the more elaborate plans I found in the literature actually suggests an extreme position in this regard. In general UIG implementation plans lie somewhere between these extremes. Even Milton Friedman excludes, for example, veterans’ benefits and “costs of public health activities, state and local expenditures on hospitals, mental institutions, and the like” [@friedmanCapitalismFreedom2002, 193]. Friedman also considers the possibility of medical expenses as tax deductions. In the other direction, proponents of a UIG in addition to current welfare argue that some programs would be redundant and their budget could be re-allocated to finance the UIG plan. [@widerquistCostBasicIncome2017, 16]

With these introductory remarks on a definition of UIG I want to take a step back and devote the next section to a broad overview over the historical and cultural context of discussing the idea of a BIG in the US and conclude with a formulation of my approach how to talk about this idea in the scope of this project. After the small detour, I continue with my analysis by introducing four categories of detailed BIG plans, identifying the problems that addressed within these categories, the possible BIG solution and visualizing the re-allocation of the current budget.

## Historical and cultural context

This section gives an overview of what I consider the cultural and historical framework of talking about the idea of a guaranteed income in the US and presents the conclusions for this project’s approach and aim.

### Learning about UIGs in the US and the cultural context of a political debate

Starting this thesis project with a bit naive, I thought it would be great to devote my efforts on an idea that is gaining attention in recent political debates and in an increasingly polarized environment had to support from people of very different, usually antagonistic political camps. To me it was immediately intriguing when Rutger Bregman [@bregmanUtopiaRealistsCase2016] or Andrew Yang [@yangWarNormalPeople2018] explain, that John Stuart Mill, Bertrand Russell, Milton Friedman, and Martin Luther King had supported the very same idea, and when Elon Musk and Mark Zuckerberg jump onboard it made it look like an easy argument to present UIGs as an idea, whose time has come _(again)_. Of course, everything turns out to be more complicated than it initially seems. Consulting with great peers and my outstanding professors at Parsons, it soon became clear that the field of redistribution economic resources, can turn into a political minefield very fast. Hints to omit political labels in my final project to avoid alienating readers early, seem very reasonable to me now, but were quite new for me at the beginning of my research. Moreover, I learned that it would be wrong to say that there is already support for UIGs across the political spectrum. Instead, it would be more accurate to say that across political orientations there are niches that share several political convictions that make the approval of a UIG concept more likely,[^conflictingBeliefs] while there are some widely held beliefs across most of the political spectrum that make the support for UIGs more unlikely. This experience led me to acknowledge that I needed to get familiar with a cultural framework to have some sensitivity in addressing the issues I want to identify in the UIG debate.

[^conflictingBeliefs]: The small number of shared political convictions might turn out as a _false alliance,_ when conflicting beliefs are not necessarily discussed by an abstract UIG concept or concerns are separated in theory, but then turn out to be inseparable pragmatically in a UIG implementation.

### When is it possible to think about a UIG and when is it not?

Even though it might seem futile at first glance to talk about UIGs in the US, there is at least one indication that it isn’t: A universal income guarantee, the Family Assistance Plan, was close to implementation under Nixon’s presidency and Ben Steensland provides an extensive and nuanced analysis why it ultimately failed in his book *The Failed Welfare Revolution: America’s Struggle over Guaranteed Income Policy*. Reflecting on the changed political environment after being close to implementation, he describes the possibility of a debate of UIGs in 2008 like this:

> “The idea of providing basic economic security to all Americans (or even just American families) is not debated today, first and foremost, because it is _unthinkable_(!). It is currently beyond the pale of American political discourse”  
> [@steenslandFailedWelfareRevolution2007, 8]

What has happened in the last decade, that it seems possible to re-introduce the idea of UIG? To answer this question, it is essential to know what rendered the idea of providing basic economic security to all Americans _unthinkable_ first. Steensland provides a method of analysis for this task by identifying the cultural categories of the “deserving” and “undeserving” poor [@steenslandFailedWelfareRevolution2007]. These allow distinguishing between people who deserve charity and welfare transfers because, despite their best efforts they were targeted by bad fate, form people who are just too lazy or defiant in other regards to sustaining a living by themselves and their moral inferiority should not be compensated with transfers. Instead, re-socialization is the best measure to help this group of people to help themselves. Although the description of this belief sounds genuinely conservative and has undoubtedly partially roots in predestination in calvinism[^religiousInfluences], it’s also widespread left-of-the-center in unions [@vanderborghtAmbiguitiesBasicIncome2013], regarding full employment an essential economic goal, in the 1990s’ “Third Way” programs of Democrats and Labour, replacing welfare with “workfare”, and in the self-awareness of the working class, taking pride in their work ethics. 

Steensland argues that a guaranteed income fundamentally challenges the distinction between “deserving” and “undeserving” by generalizing transfers. Regarding the efforts to introduce a basic income guarantee in the 1960s (under Nixon) and 1970s (under Carter) he summarizes the reason why they eventually failed:


> “This challenged the political, economic, and cultural status quo: it presumed that previously separate categories of the poor were morally equivalent to one another; it called into question existing definitions of ‘welfare’; it created a new category of government beneficiary (the ‘working poor’); and it rested on the premise that the labor market could not serve as the sole source of economic security for the nation’s able-bodied citizens. After the failure of Nixon’s proposal, legislators responded to the threats posed by GAI plans by creating new antipoverty programs – Supplemental Security Income and Earned Income Tax Credit – that institutionally reinforced categories that Nixon’s plan had threatened to dismantle.”  
> [@steenslandFailedWelfareRevolution2007, 15]

[^religiousInfluences]: More recently, this belief takes a more radical shape in Prosperity Theology. While most people do not share these beliefs explicitly, similar ones are part of a broader cultural theme. Max Weber’s analysis of the relation between protestant theology and capitalist (work) ethics is an essential reference, for example, the consequences of Luther’s concept of _sola fide_, but elaboration is beyond the scope of this project.[@weberProtestantEthicSpirit1930, especially Ch. 3 “Luther’s Conception of the Calling”]

I would argue that the abandonment of guaranteed income concepts and the institutional reinforcement of the categories of “undeserving” and “deserving” also re-established trust in the labor market, in self-directedness in regards to economic success and basically the self-made narrative of the American Dream: if “failure” is individual responsibility, there’s no reason to think of systemic failures. When the firmness of this belief (system) renders an income guarantee unthinkable thoughts and consequently public debates about this idea do not emerge on the sole basis of the idea itself, but due to external stress on the belief system.[^myArgument1960] If it is true that UIG is only thinkable when the belief in this notion of the American Dream is weakened, and there is current debate around UIG, then this belief must have suffered from internal or external stress. In the case of the US there are several developments in recent decades that arguably led to some erosion of the belief that the free market (still) provides equal opportunities for all: skill and job polarization due to growing automation[^polarization], falling real wages for the bottom half of incomes coinciding with significant income growth above the 90th percentile of the distribution[^growingIncomeGap] and stagnant or fluctuating poverty rates[@chaudryPovertyUnitedStates2016]. While these developments are happening across OECD (Organisation for Economic Co-operation and Development) countries, they are amplified by what is discussed in economics & politics literature as American Exceptionalism[^sombart], a historical debate around the curiosity that in contrast to other industrial country never had a strong socialist movement or party that David Soskice revisited arguing that decentralization and weak party discipline in the US mutually reinforce each other and facilitate business permeation of politics. [@soskiceAmericanExceptionalismComparative2010] A diagnosis shared and heavily criticized by former Secretary of Labor Robert Reich[^reich] reflecting how extensive lobbyism questions the legitimacy of capitalism in democracies – a sentiment that manifests in the more popular formulation of “the feeling that the system is rigged.” 

[^myArgument1960]: Of course, this conviction would have to be tested historically. I would need to clarify what kind of stress there was on the belief system in the 1960s, but that is beyond the scope of this paper.
[^polarization]: Supporting the automation view: [@autorPolarizationJobOpportunities2010]. Critical voices, arguing for a political economy view: [@cappelliSkillGapsSkill2015; @mishelDonBlameRobots2013, ]
[^growingIncomeGap]: Prominent in recent years is Piketty’s exhaustive research and the underlying data processing of “Capital in the Capital in the Twenty-first Century”  [@pikettyCapitalTwentyfirstCentury2014]. See also “critical voices” in footnote before. On growing inequality  [@atkinsonInequalityWhatCan2015, Part One, 1.], on the crisis of democratic capitalism [@streeckCrisesDemocraticCapitalism2011].
[^sombart]: A term rooted in the debate around Werner Sombart’s seminal piece “Why Is There No Socialism In The United States?”[@sombartWhyThereNo1906] I want to refer to David Soskice’s argument [@soskiceAmericanExceptionalismComparative2010] on how decentralization and weak party discipline reinforce each other and lead to a middle-class preference for Republican candidates, business permeation of politics and local class-sorting and consequentially to weak performance of the US in the domains of unionization, inequality, literacy, and incarceration in OECD comparison. 
[^reich]: For example recently in a Netflix documentary [@jacobkornbluthSavingCapitalism2017] based on his book “Saving Capitalism” [@reichSavingCapitalismMany2017]

### How others write about UIGs for a general audience and the potential to introduce a new approach  {#sec:myApproach}

Learning from this research and my own experience of a polarized political environment I want to try a new approach to introduce the idea of UIG to a broad audience: As a way to rethink social welfare that might help “fix” problems that current welfare programs (like welfare cliffs) face or might help to prepare for future challenges (growing unemployment due to automation). While working on UIGs, I tried to observe, what my take on UIGs is, what arguments are convincing to me and how articles and formats addressing a general audience have supported my opinion formation process. I was wondering if it was important to me who (from which political orientation) says what and how.

I read many articles advocating for or against a specific flavor of a UIG, presenting arguments for and against in a more or less nuanced fashion and often concluding with the essential argument that is meant to convince me as a reader of the author’s opinion and close the case. Other formats try to put a stronger emphasis on information about the status quo in current UIG debates, but by listing all the arguments out there sometimes fail to make connections or incompatibilities transparent. While some authors use buzz words to identify political camps or orientations like conservatives, libertarians, liberals, progressives, et cetera. Others try to avoid these labels and try to find a more specific phrasing for political beliefs. In this regard I followed the latter approach for the practical project. Instead of categorizing opinions, political or moral beliefs I tried to maintain a granular level, allowing the reader to make own groupings. The only high-level sorting that I curate as an author is the visual imitation of dialogue in the layout by splitting the central editorial section into two columns overlapping each other with one of them indented. I will elaborate on this design in the section [@sec:design]

Comparing existing news articles, blog posts and other web-based media I think to leverage the opportunities of an open-ended data-driven narration and user-interaction can result in a higher level of engagement of the reader and add a new perspective to the overall debate.

From an interaction or level of engagement point of view, I think it is possible to think of at least three distinct approaches to address an audience, setting different roles for the author and the reader.

In a first approach, the author provides all the information and evaluation of arguments, and the readers have the role of a stake-holders (or decision-makers) who determine if the presentation and arguments are valid and whether they agree or not. This approach can be extended to more than a binary choice and might also include a classification where an agreement comes with the association to a group. The author may validate or discredit the readers prior self-identification with a particular group when they agree or disagree with an argument that a member of this group would usually make. 

In a second approach, the author would also provide information and arguments but would omit their weighting and overall conclusion. Ideally, connections are made, where arguments are congruent or compatible, and distinctions and differences are emphasized where necessary. The readers, in this case, take the role of curators choosing a combination of parts of the argument and can make their case for or against the cause.

The third model is relatively close to the previous one, but some information or some conclusions are only accessible via decisions the reader has to make in the user interface. Hence the *users* have to think about the consequences of the decisions they make and develop a set of expectations that might be confirmed or disappointed. – The feedback mechanism increases involvement with the content, which can increase the comprehension of the content. In case of changing parameters of UIG parameters, the interaction increases the understanding that satisfying solutions are hard to design and if one is found not only is identification with it increases, and readers will probably find a more nuanced argument for the *own solution/proposal.* The author, in this case, refuses the role of a problem solver but instead tries to provide the best framework to understand the problem and find ways to solve them. Of course this author still frames the possible solutions and also defines what is regarded as a problem in the first place, but within this frame the readers are relatively free to come to own conclusions and discover not only information about the problem but also detect patterns of their decision making which can provide the space to reflect on underlying (moral, political) beliefs. Translated to the realm of design, the author becomes a meta-designer [@mulRedesigningDesign2011] creating a space for users to become *designers/policy-makers*  themselves, a role that can be especially empowering in a political context, when (detailed) proposals can be made by a larger audience instead of only experts that have the necessary skills to make estimates. A next step would be to create more detailed simulations, corresponding interfaces, and design a platform to share, modify, and discuss proposals between users in an easily accessible way. 

For the practical part of this project, I tried to explore this third approach. In the next two sections, I will outline the decisions I made in the structure and the design to create a first attempt to realize this approach.  

## The Structure of the practical project: Five questions.

Instead of providing an answer to whether universal income guarantees are a good idea (see [@sec:myApproach]), I am organizing the practical project along the lines of five main questions and three subsequent questions in the second section:

1. What are we talking about, when we talk about universal income guarantees?
2. Why should we talk about universal income guarantees?
    1. How many jobs will be lost due to Artificial Intelligence?
    2. How can welfare transfers be more effective?
    3. How can we improve welfare fairness?
3. How would a universal income guarantee affect incomes in the US?
4. What are the dynamic effects of an income guarantee and how can it be economically sustainable?
5. Where to go from here?

With this structure, I tried to separate some of the concerns that are usually discussed in close connection. This separation intends to focus on one aspect of the UIG debate at a time, especially separating the discussion of fairness and social justice from the presentation of static and dynamic effects, so readers can use and digest the sections separately and make their connections. If readers follow the structure linearly, the first two sections try to establish a framework to allow them to make informed decisions to use the interactive graphs of static models in the third section. The fourth section puts the results of the static models in perspective. The last section offers a different call to actions, depending on the readers' conclusions about the essay.

## The Design {#sec:design}

I want to dedicate a few words to the design. As a reference, the live project can be seen here: [https://felixbuchholz.github.io/thesis2019/](https://felixbuchholz.github.io/thesis2019/)

### Mapping a dialog

A core design decision for the visualization part was to find a visual representation of a dialog for text sections. I decided to split the editorial sections into two overlapping columns occupying around two-thirds of the editorial area in the layout. While the text is always left aligned, one column is indented to the right. The assignment to one of the columns is following three rules, but in no particular order:

- Does the expressed thought support or oppose the idea of a UIG?
- Is the next paragraph an answer or a counter-argument to the previous one?
- If we thought about political orientations, would we assign this thought to the political left or right?

The intention of having three rules in a non-hierarchical system is to balance the overall weight of the sides and also to allow slight shifts of perspective within one column.

### Two prominent marginal columns

The two prominent marginal columns in the layout have two functions –first, the conventional function which designates space to non-essential information for the progression of the central part. The second function is to define space for user interaction and feedback to that interaction for the main visualizations that occupy the whole layout. In both functions, they complement the dialectical structure of the overlapping column approach.

### Visualization aesthetics

The visual essay decidedly uses conventional bar and area charts because these are learned from similar types of graphs of economic comparison and because the main graphs have an overall high level of complexity. I also utilized texture as a means of representation what is visualized. If the graph is related to a UIG concept, the visual elements have a hachure texture; the other graphs have a solid fill. There are two variants of the hachure texture: a light, regular one for incomes without benefits and a darker cross-hatch for existing and UIG benefits. The hachure texture is straight and exact when it is representing a hypothetical scenario since there is no deviation or margin of error in an abstract ideal. In the case of applying the UIG model to the income distribution in the graphs *UIG scheme 1* and *UIG scheme 2* the texture and outlines of the visual elements gets sketchier to indicate that these are estimations involving a degree of uncertainty. The original intention was also to show the calculated margin of errors in the main graphs and the data is prepared to do that, but in the first iterations it the difference proved to be barely visible and confusing because of the high amount of information that is in the graph already.

## Data

### From reports and academic literature

For all other graphs than *UIG scheme 1* and *UIG scheme 2* the data sources are reports and academic literature. I created tables by copying the values and exported them as csv or json files. 

#### The theoretical income progression of UIG schemes {#sec:formula}

In the case of *Ideal income progression with a UIG scheme for a household with two adults and one child* I did the calculations according to Widerquist’s methodology [@widerquistCostBasicIncome2017] for a UBI model with $ 12.000 per adult and $ 6.000 per child per year and a marginal income tax rate of 50 %. For a small household with two adults and one child that would result in an annual net benefit of: 
2 x $ 12.000 + 1 x $ 6.000 = $ 30,000 if its income was zero. As their income grows, their net benefit follows the formula: 

UBI - Income x Tax-rate = Net benefits

In the described scenario this leads to a break-even point where the net benefit equals zero at $ 60,000:

$ 30,000 - $ 60,000 x 0.5 = 0

In general, with a marginal tax rate of 50 % the break-even point is at two times the income of the initial amount of transfer (for zero income):

The formula for the break-even point is:  
UBI - Income x 0.5 = 0

Which can be transformed to:  
Income = UBI x 2

### Aggregating survey level Census data

#### Survey data and self-reported incomes

The data source of the interactive calculations is my aggregation of the United States Census Bureau’s Annual Social and Economic Supplement (ASEC) of the Current Population Survey (CPS) of 2017 as provided by IPUMS (Integrated Public Use Microdata Series, Current Population Survey) [@floodIntegratedPublicUse2018]. The data is at the survey level and contains 185,000 observations. Most variables in the data set record self-reported answers to the Census Bureau’s ASEC questionnaire. Only tax-related information, for example, the amount of Earned Income Tax Credit (EITC) are calculated via the Census Bureau’s tax model, 

> which simulates individual tax returns to produce estimates of federal, state, and payroll taxes. The model incorporates information from non-CPS sources, such as the Internal Revenue Service’s Statistics of Income series, the American Housing Survey, and the State Tax Handbook. [@ipums-cpsDescriptionEarnedIncome]

To make the separation between and income without benefits possible that is needed for graph *UIG scheme 2* allowing to replace existing benefits with a universal income guarantee I need to use mostly the income variables that are self-reported because those calculated with the Census Bureau’s tax model do not account for individual welfare transfers. Self-reported incomes can be slightly skewed when respondents over-estimate their incomes, and there are also other effects on report behavior, for example, spouses adjusting reported earnings to social norms [@uscensusbureauShhhMakeMore]. The advantage is that the self-reported data provides more detail; for example, in the case of Social Security income, the reasons for eligibility for the benefits is also reported.

#### Binning incomes, aggregating over households, grouping benefits

I decided to use the same income groups that the Census Bureau uses to report its aggregate statistics [@bureauSelectedEconomicCharacteristics] with an important distinction: the Census Bureau uses household incomes with benefits as a basis for binning into income groups while I’m using the income without benefits. Thus my bins represent other parts of the population with more dramatic differences in the lower income groups than in the higher ones. 

For every variable I used, I am aggregating the values over households, because this is the commonly used tax unit used to report income distributions. Even though the recipient unit for a UBI in *UIG scheme 1* are individuals and not households it facilitates overall comparison to use households as a unit of observation. In this case, the household UIG average benefits are calculated by using the average number of adults and children per household and the average household income in each income group according to the formulas in [@sec:formula]. The total benefits for an income group are the product of average benefits and number of households in this income bin. The effects on the overall balance are then the sum of total benefits of all income groups. This methodology is proposed by Karl Widerquist [@widerquistCostBasicIncome2017] and used correspondingly to calculate savings of the deactivated existing welfare programs.

In the data set, I grouped variables first by income without benefits and welfare. Some of the used variables record private incomes as well as public transfers, for example, the variable retirement income. For these variables, I separated the incomes by the source of income as recorded in another variable and allotted the amounts of income to the respective groups. 

I also created four groups of welfare benefits, which contain benefits from the following programs.

1. **Disability status and ‘other’**
-  Supplemental Security Income
-  Social Security benefits due to disability status
-  Disability benefits from one of these programs: Worker’s compensation; federal government civil service disability; U.S. military retirement disability; state or local government employee disability; U.S. Railroad Retirement disability; black lung miner’s disability; or state temporary sickness payments [@ipums-cpsDescriptionIncomeDisability]

2. **Family and child assistance, SNAP**
- Supplemental Nutrition Assistance Program (SNAP)
- Temporary Assistance for Needy Families (TANF)
- Income from child support
- Child Tax Credit
- Additional Child Tax Credit
- Social Security benefits for dependent children or on behalf of children
- Heating and energy subsidies

3. **Work related, education**
- Income from Worker compensation
- Earned Income Tax Credit (EITC)
- Supplemental unemployment benefits
- Educational assistance includes Pell Grants or other aid from government sources

4. **Retirement, veteran and survivor status**
- Social Security benefits due to retirement or old age
- Social Security benefits due to widow status, as a surviving child or on behalf of surviving, dependent, or disabled child(ren)
- Federal government retirement pension
- U.S. Military retirement pension
- State or local government retirement pension
- U.S. Railroad retirement pension
- Payments from the Veterans’ Administration

Indeed the documentation of these data decision and calculations should be improved in the practical project. As a non-native, given the time constraints of this project, it was challenging to formulate a concise and accurate introduction to the variety of welfare programs in the United States. These groups could also be complemented by a fifth group: Medicare and Medicaid. Unfortunately, the market value of these benefits is not included in the Census data anymore. The values would have to be inferred by using recipient status, lists of expenditures of these programs per average recipient per state, and inflation correction. Given that UIG propositions, in general, do not consider replacing health care programs, the extra effort was omitted for now. However, to include more radical perspectives and to have another comparison of magnitudes in spending this will be one of the first extensions of the project.

Overall some of the approaches could only be outlined in this project. I hope the various potentials to expand its scope become apparent. 


# Conclusion

This thesis is an attempt at creating new platforms and strategies to inform and facilitate nuanced debates about controversial but critical political issues. In regards to the case study, the discussion of the idea and implications of universal income guarantees, it realizes meaningful first steps. The language, tone, and address of the audience offers contemporary access that is historically and culturally aware of the pitfalls of ideological generalization and demarcation. The design exemplifies an innovative approach to represent multiple perspectives in a layout and combines linear and hyper-textual strategies of narration. To the best of my knowledge by the time of this writing the application of the two economic models by Friedman and Widerquist to calculate effects on income distribution has not yet been attempted with survey-level Census data. Using this method could certainly be extended by combining more datasets, a historical approach or a more granular analysis, but can in itself also be regarded as a small contribution to the UIG debate as it provides more granular observations to the rough estimates of back-of-the-envelope cost calculations of universal income guarantees.

Last but not least, the implementation of user interaction shows the potential of putting the audience in the driver seat of drawing conclusions and making decisions. In the context of policy discussions this approach can increase the level of understanding and engagement but is also empowering in a more general sense: without the need to acquire expert skills, a broader audience can see effects of small parameter changes in a public policy propositions and gains insights that are usually not readily available. Access to the process of balancing and evaluating the effects, in this case of a UIG, also helps to broaden the understanding of challenges when designing satisfying solutions to questions of distributive justice. It is the hope and vision of this project that this realization and acknowledgment improves the receptiveness for political compromise and will be received as an opportunity beyond the specific proposition of a universal income guarantee to (re)think welfare, social and political cohesion and the possibilities of shared growth.


# Bibliography
